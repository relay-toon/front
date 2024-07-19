'use client';
import DrawingOrder from '@/src/components/DrawingOrder';
import OnlyLogoHeader from '@/src/components/header/OnlyLogoHeader';
import HeaderFinishedButton from '@/src/components/header/_component/HeaderSmallButton';
import dynamic from 'next/dynamic';
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useGetToonInfo } from '@/src/hooks/useGetToonInfo';
import { usePutToon } from '@/src/hooks/usePutToon';
import { useGetMyInfo } from '@/src/hooks/useGetMyInfo';
import ModalPainterName from '@/src/components/ModalPainterName';
import ModalConfirmBack from '@/src/components/ModalConfirmBack';
import WrappedCanvas from '../_component/WrappedCanvas';
interface FabricCanvasHandle {
  getCanvas: () => HTMLCanvasElement | null;
  canvasInstance: fabric.Canvas | null;
}

interface ForwardRefCanvasProps {
  prevPicture?: string;
}

const ForwardRefCanvas = forwardRef<FabricCanvasHandle, ForwardRefCanvasProps>(
  (props, ref: ForwardedRef<FabricCanvasHandle>) => {
    return <WrappedCanvas {...props} forwardRef={ref} />;
  },
);
ForwardRefCanvas.displayName = 'ForwardRefCanvas';

const StartModal = dynamic(() => import('@/src/components/StartModal'), {
  ssr: false,
});
export default function DrawingPage() {
  const { id } = useParams();
  const { mutate: uploadToon } = usePutToon();
  const { data: toonData, isLoading } = useGetToonInfo(id);
  const [start, setStart] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [time, setTime] = useState(toonData?.timer);
  const { data: myInfo } = useGetMyInfo();
  const [painterName, setPainterName] = useState('');
  const canvasRef = useRef<FabricCanvasHandle>(null);
  const router = useRouter();
  const searchParam = useSearchParams();
  const count = searchParam.get('count');
  const [isBack, setIsBack] = useState(false);
  const [startModal, setStartModal] = useState(true);

  useEffect(() => {
    setTime(toonData?.timer);
  }, [toonData?.timer]);

  const confirmBack = () => {
    setStart(false);
    setIsBack(true);
  };

  function useConstomBack(customback: () => void) {
    const browserPreventEvent = (event: () => void) => {
      history.pushState(null, '', location.href);
      event();
    };
    useEffect(() => {
      history.pushState(null, '', location.href);
      window.addEventListener('popstate', () => {
        browserPreventEvent(customback);
      });
      return () => {
        window.removeEventListener('popstate', () => {
          browserPreventEvent(customback);
        });
      };
    }, []);
  }
  useConstomBack(confirmBack);
  function dataURLtoFile(dataUrl: string, filename: string) {
    const matches = dataUrl.match(/:(.*?);/);
    if (!matches) {
      throw new Error('Invalid data URL');
    }
    const mime = matches[1];
    const bstr = atob(dataUrl.split(',')[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  const onClick = () => {
    if (!canvasRef.current || isLoading) {
      return;
    }
    const fabricCanvas = canvasRef.current.canvasInstance;
    if ((fabricCanvas && time === 0) || time === 86400) {
      const imageData = fabricCanvas!.toDataURL({
        format: 'png',
        quality: 1.0,
      });
      const imageFile = dataURLtoFile(imageData, 'canvas_image.png');
      try {
        if (toonData) {
          const toonUpdate = {
            ...toonData,
            image: imageFile,
            name: myInfo?.name || painterName,
            userId: myInfo?.id || '',
            id: toonData.id,
          };
          setIsComplete(true);
          uploadToon(toonUpdate, {
            onSuccess: () => {
              router.push(`/finished-drawing/${id}?count=${count}`);
            },
            onError: () => {
              alert('에러가 발생했습니다. 다시 시도해주세요.');
              router.push(`/prevPicture/${id}?count=${count}`);
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onFinishClick = () => {
    setIsComplete(true);
  };

  if (isLoading || !toonData) {
    return <LoadingSpinner />;
  }

  return (
    <div className="h-screen overflow-x-hidden">
      {startModal && (
        <div
          className="margin-auto fixed top-0 z-50 h-[100vh] w-[390px] overflow-hidden"
          style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
        >
          <StartModal
            setStartModal={setStartModal}
            setStart={setStart}
            time={time}
          />
        </div>
      )}
      {isComplete && (
        <div
          className="margin-auto fixed top-0 z-50 h-[100vh] w-[390px] overflow-hidden"
          style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
        >
          <ModalPainterName
            savePicture={onClick}
            painterName={painterName}
            setPainterName={setPainterName}
            onClick={onClick}
          />
        </div>
      )}
      {isBack && (
        <div className="fixed z-50">
          <ModalConfirmBack
            setStart={setStart}
            setIsBack={setIsBack}
            isBack={isBack}
          />
        </div>
      )}
      <div className="mb-[1rem] flex flex-row justify-between">
        <OnlyLogoHeader />
        <HeaderFinishedButton
          time={time}
          onClick={onFinishClick}
          setTime={setTime}
          isComplete={isComplete}
          setIsComplete={setIsComplete}
          start={start}
        />
      </div>
      <div className="flex flex-row px-5 py-3">
        <div className="text-xl font-bold">그림 주제</div>
        <DrawingOrder
          completed={false}
          width={127}
          height={33}
          positionStyle={{ top: '0px', left: '150px', position: 'relative' }}
        />
      </div>
      <div className="ml-auto mr-auto flex w-[350px] rounded-lg bg-white px-5 py-3 text-lg font-extrabold ">
        <span>{toonData?.title}</span>
      </div>
      <div className="relative ml-auto mr-auto mt-3 w-[350px]">
        <ForwardRefCanvas ref={canvasRef} prevPicture={toonData?.image} />
      </div>
    </div>
  );
}

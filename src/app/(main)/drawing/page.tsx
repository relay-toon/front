'use client';
import DrawingOrder from '@/src/components/DrawingOrder';
import OnlyLogoHeader from '@/src/components/header/OnlyLogoHeader';
import HeaderFinishedButton from '@/src/components/header/_component/HeaderSmallButton';
import dynamic from 'next/dynamic';
import { forwardRef, useEffect, useRef } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { usePutToon } from '@/src/hooks/usePutToon';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import { useGetToonInfo } from '@/src/hooks/useGetToonInfo';
const Canvas = dynamic(() => import('./_component/WraapedCanvas'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});
const ForwardRefCanvas = forwardRef((props: any, ref: any) => {
  console.log('ref:', ref);
  return <Canvas {...props} forwardRef={ref} />;
});

export default function DrawingPage() {
  const { id } = useParams();
  const canvasRef = useRef<any>(null);
  const { data: toonData, isLoading } = useGetToonInfo(id);
  const { mutate: uploadToon } = usePutToon();

  const onClick = () => {
    if (!canvasRef.current || isLoading) {
      return;
    }
    const fabricCanvas = canvasRef.current.canvasInstance;
    console.log('Fabric canvas:', fabricCanvas);
    if (fabricCanvas) {
      const imageData = fabricCanvas.toDataURL({
        format: 'png',
        quality: 1.0,
      });
      console.log('Image data:', imageData);
      if (toonData) {
        const toonUpdate = {
          ...toonData,
          image: imageData,
        };
        uploadToon(toonUpdate);
        console.log('Toon updated:', toonUpdate);
      }
    } else {
      console.log('Canvas instance is not available.');
    }
  };

  return (
    <div>
      <div className="mb-[1rem] flex flex-row justify-between">
        <OnlyLogoHeader />
        <HeaderFinishedButton time={12} isComplete={true} onClick={onClick} />
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
      <div className="ml-auto mr-auto flex w-[350px] rounded-lg bg-white px-5 py-3 text-base">
        <span>주제</span>
      </div>
      <div className="relative ml-auto mr-auto mt-3 w-[350px]">
        <ForwardRefCanvas ref={canvasRef} />
      </div>
    </div>
  );
}

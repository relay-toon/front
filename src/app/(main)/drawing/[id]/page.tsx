'use client';
import DrawingOrder from '@/src/components/DrawingOrder';
import OnlyLogoHeader from '@/src/components/header/OnlyLogoHeader';
import HeaderFinishedButton from '@/src/components/header/_component/HeaderSmallButton';
import dynamic from 'next/dynamic';
import { forwardRef, useRef } from 'react';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import { useParams, useSearchParams } from 'next/navigation';
import { useGetToonInfo } from '@/src/hooks/useGetToonInfo';
import { usePutToon } from '@/src/hooks/usePutToon';
import { useGetMyInfo } from '@/src/hooks/useGetMyInfo';
const Canvas = dynamic(() => import('../_component/WraapedCanvas'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});
const ForwardRefCanvas = forwardRef((props: any, ref: any) => {
  console.log('ref:', ref);
  return <Canvas {...props} forwardRef={ref} />;
});

export default function DrawingPage() {
  const { id } = useParams();
  const { data: myInfo } = useGetMyInfo();
  const searchParam = useSearchParams();
  const count = searchParam.get('count');
  const { data: toonData, isLoading } = useGetToonInfo(id);
  const { mutate: uploadToon } = usePutToon();
  const canvasRef = useRef<any>(null);

  const onClick = () => {
    if (!canvasRef.current || isLoading || !myInfo) {
      return;
    }
    const fabricCanvas = canvasRef.current.canvasInstance;
    if (fabricCanvas) {
      const imageData = fabricCanvas.toDataURL({
        format: 'png',
        quality: 1.0,
      });
      if (toonData) {
        const toonUpdate = {
          ...toonData,
          image: imageData,
          name: myInfo.name,
        };
        uploadToon(toonUpdate);
        console.log('toonUpdate:', toonUpdate);
      }
    } else
      (error: any) => {
        console.log('error:', error);
        alert('에러');
      };
  };

  return (
    <div>
      <div className="mb-[1rem] flex flex-row justify-between">
        <OnlyLogoHeader />
        {/* <Link
          href={{
            pathname: `/finished-drawing/${id}`,
            query: { count: count },
          }}
        > */}
        <HeaderFinishedButton
          time={toonData?.timer}
          isComplete={true}
          onClick={onClick}
        />
        {/* </Link> */}
      </div>
      <div className="flex flex-row px-5 py-3">
        <div className="text-xl font-bold">그림 주제</div>
        <DrawingOrder
          count={count}
          width={127}
          height={33}
          positionStyle={{ top: '0px', left: '150px', position: 'relative' }}
        />
      </div>
      <div className="ml-auto mr-auto flex w-[350px] rounded-lg bg-white px-5 py-3 text-base">
        <span>{toonData?.title}</span>
      </div>
      <div className="relative ml-auto mr-auto mt-3 w-[350px]">
        <ForwardRefCanvas ref={canvasRef} />
      </div>
    </div>
  );
}

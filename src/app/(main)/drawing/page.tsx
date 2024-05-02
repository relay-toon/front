'use client';
import DrawingOrder from '@/src/components/DrawingOrder';
import OnlyLogoHeader from '@/src/components/header/OnlyLogoHeader';
import HeaderFinishedButton from '@/src/components/header/_component/HeaderSmallButton';
import dynamic from 'next/dynamic';
import { forwardRef, useEffect, useRef } from 'react';
import LoadingSpinner from '@/src/components/LoadingSpinner';

const FabricCanvasWithNoSSR = dynamic(
  () => import('@/src/components/FabricCanvas'),
  {
    ssr: false,
    loading: () => <LoadingSpinner />,
  },
);

const ForwardFabricCanvas = forwardRef((props: any, ref: any) => {
  console.log('Forwarding ref:', ref);
  return <FabricCanvasWithNoSSR {...props} ref={ref} />;
});

export default function DrawingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onClick = () => {
    const canvas = canvasRef.current;
    const data = canvas?.toDataURL();
    console.log(data);
    console.log(canvas);
  };
  useEffect(() => {
    console.log('Accessing canvas ref from parent:', ForwardFabricCanvas);
  }, []);
  return (
    <div>
      <div className="mb-[1rem] flex flex-row justify-between">
        <OnlyLogoHeader />
        <HeaderFinishedButton time={12} isComplete={true} onClick={onClick} />
      </div>
      <div className="flex flex-row px-5 py-3">
        <div className="text-xl font-bold">그림 주제</div>
        <DrawingOrder
          width={127}
          height={33}
          positionStyle={{ top: '0px', left: '150px', position: 'relative' }}
        />
      </div>
      <div className="ml-auto mr-auto flex w-[350px] rounded-lg bg-white px-5 py-3 text-base">
        <span>주제</span>
      </div>
      <div className="relative ml-auto mr-auto mt-3 w-[350px]">
        <ForwardFabricCanvas />
      </div>
    </div>
  );
}

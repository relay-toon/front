'use client';
import DrawingOrder from '@/src/components/DrawingOrder';
import OnlyLogoHeader from '@/src/components/header/OnlyLogoHeader';
import HeaderFinishedButton from '@/src/components/header/_component/HeaderSmallButton';
import dynamic from 'next/dynamic';
import { forwardRef, useEffect, useRef } from 'react';

// const Canvas = dynamic(() => import('./_component/WraapedCanvas'), {
//   ssr: false,
// });
// const ForwardRefCanvas = forwardRef((props: any, ref: any) => {
//   console.log('ref:', ref);
//   return <Canvas {...props} forwardRef={ref} />;
// });
const FabricCanvasWithNoSSR = dynamic(
  () => import('@/src/app/(main)/drawing/_component/FabricCanvas'),
  {
    ssr: false,
  },
);

const ForwardFabricCanvas = forwardRef((props: any, ref: any) => {
  console.log('ref: ', ref);
  return <FabricCanvasWithNoSSR {...props} forwardRef={ref} />;
});

export default function DrawingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onClick = () => {
    if (canvasRef.current) {
      const data = canvasRef.current.toDataURL();
      console.log(data);
    } else {
      console.log('Canvas is not initialized yet.');
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      console.log('Canvas ref is now set:', canvasRef.current);
    } else {
      console.log('Canvas ref is not set yet.');
    }
  }, [canvasRef.current]);
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
        <ForwardFabricCanvas ref={canvasRef} />
      </div>
    </div>
  );
}

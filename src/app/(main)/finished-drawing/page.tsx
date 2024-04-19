import DrawingOrder from '@/src/components/DrawingOrder';
import Image from 'next/image';
import '../../styles/globals.css';
import SaveButton from '@/src/components/SaveButton';
import ShareButton from '@/src/components/ShareButton';

export default function FinishedDrawing() {
  return (
    <div>
      <div className="flex justify-center  text-2xl custom-waguri-font mt-4">
        1번째&nbsp;<span className="text-[#9B9B9B]">그림 완성!</span>
      </div>
      <div className="mt-3 text-lg">
        <div className="flex justify-center">다음 순서로 그릴 멤버들에게</div>
        <div className="flex justify-center">
          <span className="font-bold">링크를 공유</span>
          {''}해주세요!
        </div>
      </div>
      <div className="mt-8">
        <DrawingOrder
          width={108}
          height={33}
          positionStyle={{ top: '44px', left: '64px', position: 'relative' }}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="/img/draw-example.png"
          alt="draw-example"
          width={280}
          height={364}
        />
      </div>
      <div className="flex flex-row mt-9 gap-[14px] justify-center mb-[116px]">
        <SaveButton />
        <ShareButton />
      </div>
    </div>
  );
}

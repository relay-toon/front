import DrawingOrder from '@/src/components/DrawingOrder';
import Image from 'next/image';
import SaveButton from '@/src/components/SaveButton';
import ShareButton from '@/src/components/ShareButton';
import MenuHeader from '@/src/components/header/MenuHeader';

export default function FinishedDrawing() {
  return (
    <div>
      <MenuHeader />
      <div className="custom-waguri-font mt-4  flex justify-center text-2xl">
        1번째&nbsp;<span className="text-[#9B9B9B]">그림 완성!</span>
      </div>
      <div className="mt-3 text-lg">
        <div className="flex justify-center">다음 순서로 그릴 멤버들에게</div>
        <div className="flex justify-center">
          <span className="font-bold">링크를 공유</span>
          해주세요!
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
      <div className="mb-[116px] mt-9 flex flex-row justify-center gap-[14px]">
        <SaveButton />
        <ShareButton />
      </div>
    </div>
  );
}

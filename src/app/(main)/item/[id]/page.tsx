import SaveButton from '@/src/components/SaveButton';
import ShareButton from '@/src/components/ShareButton';
import BackHeader from '@/src/components/header/BackHeader';
import Image from 'next/image';

export default function ItemPage() {
  const now = Date.now();
  const date = new Date(now).toLocaleDateString();
  return (
    <div className="mb-[112px]">
      <BackHeader text="그림상세" />
      <div className="text-base] align-center mt-4 flex justify-center text-[#9E9E9E]">
        {date}
      </div>
      <div className="align-center ml-auto mr-auto flex w-[280px] rounded-md bg-white text-center">
        <div className="flex-start flex px-[18.5px] py-3 text-xs">테스트</div>
      </div>
      <div className="ml-auto mr-auto mt-4 flex h-[364px] w-[280px] items-center rounded-md bg-white">
        <Image
          src="/img/draw-example.png"
          alt="picture-gallery"
          width={280}
          height={280}
        />
      </div>
      <div className="my-[15px] ml-auto mr-auto flex h-14 w-[350px] flex-row content-between items-center justify-between bg-[#EAEAEA] px-[15px] text-base font-semibold text-[#666666]">
        <div>참여 멤버</div>
        <div className=" flex flex-row items-center">
          4명
          <Image
            src="/svg/right-arrow.svg"
            alt="arrow"
            width={26}
            height={26}
          />
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-[14px]">
        <SaveButton />
        <ShareButton />
      </div>
    </div>
  );
}

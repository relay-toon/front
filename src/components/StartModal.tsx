import Image from 'next/image';
import LargeButton from './LargeButton';

export default function StartModal() {
  return (
    <div className="flex flex-col rounded-t-3xl bg-white">
      <div className="mt-12 flex justify-center text-center">
        시작하기 버튼을 누르면
        <br />
        [타이머]가 자동 재생돼요!
      </div>
      <div className="align-center ml-auto mr-auto mt-6 flex h-[105.97px]  w-[272.65px] flex-row  items-center  rounded-2xl bg-[#e8e8e8d0]">
        <Image
          src="/svg/timer.svg"
          alt="timer"
          width={48.4}
          height={38.97}
          className="ml-[36px]"
        />

        <div className="custom-waguri-font ml-[24px] text-[32px] leading-[48px]">
          총 12초!
        </div>
      </div>
      <div className="mb-[33px] mt-[40px] flex justify-center">
        <LargeButton buttonText="시작하기" />
      </div>
    </div>
  );
}

import Image from 'next/image';

interface HeaderSmallButtonProps {
  timeLeft: number;
  isComplete: boolean;
}
export default function HeaderSmallButton({
  timeLeft,
  isComplete,
}: HeaderSmallButtonProps) {
  return (
    <div>
      {isComplete ? (
        <div className="mr-5 py-[6px]">
          <button className="custom-waguri-font h-[36px] w-[70px] rounded-[6px] bg-[#E0FF68] text-black">
            완성
          </button>
        </div>
      ) : (
        <div className="mr-5 flex flex-row py-[6px]">
          <Image
            src="/svg/timer.svg"
            alt="timer"
            width={31.15}
            height={27.97}
          />
          <button className="custom-waguri-font ml-[13.85px] h-[36px] w-[70px] rounded-[6px] bg-black text-[#E0FF68]">
            {timeLeft}초
          </button>
        </div>
      )}
    </div>
  );
}

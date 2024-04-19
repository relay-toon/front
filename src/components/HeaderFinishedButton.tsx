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
        <button className="h-[36px] w-[70px] rounded-[6px] bg-[#E0FF68] text-black">
          완료
        </button>
      ) : (
        <button className="h-[36px] w-[70px] rounded-[6px] bg-black text-[#E0FF68]">
          <Image
            src="/svg/timer.svg"
            alt="timer"
            width={31.15}
            height={27.97}
          />
          {timeLeft}초
        </button>
      )}
    </div>
  );
}

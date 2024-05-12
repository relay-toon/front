import Image from 'next/image';
import { SetStateAction, useEffect } from 'react';

interface HeaderSmallButtonProps {
  time: number;
  setTime?: React.Dispatch<SetStateAction<number>>;
  isComplete: boolean;
  setIsComplete?: React.Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
  start?: boolean;
}
export default function HeaderSmallButton({
  time,
  setTime,
  isComplete,
  setIsComplete,
  onClick,
  start,
}: HeaderSmallButtonProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0 && !isComplete && start && setTime) {
        setTime(time - 1);
      } else if (time === 0 && setIsComplete) {
        setIsComplete(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time, start, isComplete]);
  return (
    <div>
      {isComplete ? (
        <div className="mr-5 py-[6px]">
          <button
            className="custom-waguri-font h-[36px] w-[70px] rounded-[6px] bg-[#E0FF68] text-black"
            onClick={onClick}
          >
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
            {time}초
          </button>
        </div>
      )}
    </div>
  );
}

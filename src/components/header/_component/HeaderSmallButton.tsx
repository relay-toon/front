import { SetStateAction, useEffect } from 'react';

interface HeaderSmallButtonProps {
  time: number;
  setTime?: React.Dispatch<SetStateAction<number>>;
  isComplete: boolean;
  setIsComplete?: React.Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
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
      if (time > 0 && time < 21 && !isComplete && start && setTime) {
        setTime(time - 1);
      } else if (time === 0) {
        if (setIsComplete) {
          setIsComplete(true);
        }
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time, start, isComplete]);

  return (
    <div>
      <div className="mr-5 py-[6px]">
        {time === 99 || time === 0 ? (
          <button
            className="custom-waguri-font h-[36px] w-[70px] rounded-[6px] bg-[#E0FF68] text-black"
            onClick={onClick}
          >
            완성
          </button>
        ) : (
          <button
            className="custom-waguri-font h-[36px] w-[70px] rounded-[6px] bg-black text-[#E0FF68]"
            onClick={onClick}
          >
            {time}초
          </button>
        )}
      </div>
    </div>
  );
}

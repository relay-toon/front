import Image from 'next/image';
import LargeBtn from './LargeBtn';
import { SetStateAction } from 'react';

interface IStartModal {
  setStart: React.Dispatch<SetStateAction<boolean>>;
  time: number;
}

export default function StartModal({ setStart, time }: IStartModal) {
  const onStartClick = () => {
    setStart(true);
  };

  return (
    <div className="absolute bottom-0 z-50 flex h-[367px] w-[391px] flex-col rounded-t-3xl bg-white">
      {time !== 99 ? (
        <>
          {' '}
          <div className="custom-pretendard-font mt-12 flex justify-center text-center font-semibold">
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
              총 {time}초!
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="custom-pretendard-font mt-12 flex justify-center text-center font-semibold">
            시작하기 버튼을 누르면
            <br />
            그림 그리기를 시작합니다!
          </div>
          <div className="align-center ml-auto mr-auto mt-6 flex h-[105.97px]  w-[272.65px] flex-row items-center rounded-2xl bg-[#e8e8e8d0]">
            <Image
              src="/svg/timer.svg"
              alt="timer"
              width={40.4}
              height={30.97}  
              className="ml-[30px]"
            />

            <div className="custom-waguri-font ml-[20px] text-[24px] leading-[48px]">
              시간 제한 없음!
            </div>
          </div>{' '}
        </>
      )}
      <div className="mb-[33px] mt-[40px] flex justify-center">
        <LargeBtn text="시작하기" active={true} onClick={onStartClick} />
      </div>
    </div>
  );
}

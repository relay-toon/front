import Image from 'next/image';

export default function Main() {
  return (
    <div className="mt-[23.5px] p-5">
      <div className="flex justify-center">
        <Image
          src="/img/main-image.png"
          alt="main image"
          width={310}
          height={306}
        />
      </div>
      <span className="flex text-xl mt-9 justify-center font-normal custom-waguri-font">
        다함께 완성하는 릴레이툰!
      </span>
      <button className="flex w-[349px] h-[58px] rounded-[10px] bg-[#E0FF68] justify-center items-center mt-5 ml-auto mr-auto text-xl font-normal">
        릴레이툰 시작하기
      </button>
      {/* 나중에 버튼 컴포넌트로 변령 */}
      <div className="flex flew-row  mt-[62.5px]">
        <Image src="/svg/star.svg" alt="star" width={37} height={39} />
        <span className="flex items-center ml-[4.5px] text-xl font-normal custom-waguri-font">
          릴레이툰이란?
        </span>
      </div>
      <div className="text-base mt-4">
        릴레이툰은 여러명이서 릴레이로{' '}
        <span className="font-bold text-[#464646]">이어그리는 그림</span>을 말
        <br />
        해요! 다같이 재미있는 그림을 완성해보세요!
      </div>
      <div className="flex items-center w-[350px] h-[180px] bg-white mt-10 rounded-xl">
        <div className="flex flex-col p-5 w-full">
          <div className="flex flex-row">
            <span className="flex custom-waguri-font">1. 그림 주제 정하기</span>
            <span className="flex bg-[#E0FF68] rounded-[10px] font-bold ml-[6px] text-xs items-center px-2.5 py-0.5">
              주제는 마스터가 직접 선정해요!
            </span>
          </div>
          <div className="flex flex-row mt-[34px] ml-[32.5px] mr-[32.5px]">
            <span className="text-[14px] font-bold">그림 주제</span>
            <span className="text-[9.8px] ml-[170px]">0/30</span>
          </div>
          <div>
            <Image
              src="/img/example-input.png"
              alt="example-input"
              width={245}
              height={33.6}
              className="flex ml-auto mr-auto mt-2 mb-[19.4px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Image
          src="/svg/under-arrow.svg"
          alt="under-arrow"
          width={12}
          height={16}
        />
      </div>
      <div className="flex items-center w-[350px] h-[180px] bg-white mt-4 rounded-xl">
        <div className="flex flex-col p-5 w-full h-full">
          <div className="flex flex-row">
            <span className="flex custom-waguri-font">
              2. 함께할 멤버 수 정하기
            </span>
            <span className="flex bg-[#E0FF68] rounded-[10px] font-bold ml-[6px] text-xs items-center px-2.5 py-0.5">
              최대 8명까지
            </span>
          </div>
          <div className="flex flex-col mt-[35.38px] ml-[37.15px]">
            <div>참여 멤버 수</div>
            <div className="flex flex-row mt-2 text-center  gap-1">
              <div className="border-[1px] rounded-[5.04px] w-[59.4px] h-[29.14px] text-[11.34px] font-medium  content-center border-[#DEDEDE] bg-black text-white">
                1명
              </div>
              <div className="border-[1px] rounded-[5.04px] w-[59.4px] h-[29.14px] text-[11.34px] font-medium  content-center border-[#DEDEDE]">
                2명
              </div>
              <div className="border-[1px] rounded-[5.04px] w-[59.4px] h-[29.14px] text-[11.34px] font-medium  content-center border-[#DEDEDE]">
                3명
              </div>
              <div className="border-[1px] rounded-[5.04px] w-[59.4px] h-[29.14px] text-[11.34px] font-medium  content-center border-[#DEDEDE]">
                4명
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Image
          src="/svg/under-arrow.svg"
          alt="under-arrow"
          width={12}
          height={16}
        />
      </div>
      <div className="flex items-center w-[350px] h-[180px] bg-white mt-4 rounded-xl mb-[116px]">
        <div className="flex flex-col p-5 w-full h-full">
          <div className="flex flex-row">
            <span className="flex custom-waguri-font">
              3. 그림은 타임어택! 초 정하기
            </span>
            <span className="flex bg-[#E0FF68] rounded-[10px] font-bold ml-[9px] text-xs items-center px-2.5 py-0.5">
              맞춤 시간 추천!
            </span>
          </div>
          <div className="flex flex-row mt-12 justify-center">
            <div className="border-[1px] rounded-[5.04px] w-[59.4px] h-[29.14px] text-[11.34px] text-center font-medium  content-center border-[#DEDEDE] bg-black text-white px-[18.9px] py-[6.3px]">
              4명
            </div>
            <Image
              src="/svg/timer.svg"
              alt="timer"
              width={48.4}
              height={38.97}
              className="ml-[22.52px]"
            />
            <div className="text-base ml-[19.28px]">총 40초!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

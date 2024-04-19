'use client';
import LargeBtn from '@/src/components/LargeBtn';
import { useEffect, useRef, useState } from 'react';
import { start } from 'repl';

export default function CreateRoom() {
  const [subjectText, setSubjectText] = useState('');
  const maxLength = 25;
  let hashtagArr = ['#어디에서', '#누가', '#무엇을', '#어떻게', '#하는것'];
  let drawingTime = ['제한없음', '12초', '16초', '20초'];
  let memberNumArr = new Array(6).fill(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseOver = () => {
      const slider = sliderRef.current;
      if (slider) {
        slider.addEventListener('wheel', (e) => {
          e.preventDefault();
        });
      }
    };
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('mouseover', handleMouseOver);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, []);

  const moseoverHandler = () => {
    const item = document.getElementById('item');
    const slider = document.getElementById('slider');
    const clientWidth = item?.clientWidth;

    slider?.addEventListener('wheel', (e) => {
      if (e.deltaY < 0 && clientWidth) {
        slider.scrollLeft -= clientWidth * 2;
        console.log(slider.scrollLeft);
      } else if (e.deltaY > 0 && clientWidth) {
        slider.scrollLeft += clientWidth * 2;
        console.log(slider.scrollLeft);
      }
    });
  };

  return (
    <div className="max-w-sm mt-[23.5px] p-5 bg-white custom-waguri-font">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span>그림 주제</span>
          <span>
            {subjectText.length}/{maxLength}
          </span>
        </div>
        <input
          className="p-3 rounded-lg border border-[#9B9B9B] placeholder:text-[#9B9B9B] mt-[16px]"
          type="text"
          placeholder="멤버들과 그릴 그림 주제를 입력해주세요!"
        />
        <div className="flex gap-[10px] text-sm mt-[14px]">
          {hashtagArr.map((hashtag, index) => (
            <div key={`${hashtag}-${index}`}>
              <span>{hashtag}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-[93px] h-[31px] rounded-[4px] bg-[#F2F2F2] text-sm mt-[20px]">
          <span className="text-[#9B9B9B]">예시문장보기</span>
        </div>
      </div>
      <div className="h-[94px] mt-[64px] " onWheel={moseoverHandler}>
        <div className="flex justify-between relative">
          <span>참여 멤버 수</span>
          <span>최대 6명</span>
        </div>
        <div
          className="mt-[16px] flex gap-[10px] overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth"
          id="slider"
          ref={sliderRef}
        >
          {memberNumArr.map((num, i) => (
            <div
              key={`${num}-${i}`}
              id="item"
              className="w-[84px] flex justify-aroundabsolute"
            >
              <button className="w-[84px] h-[48px] rounded-lg border border-[#DEDEDE] ease-in-out focus:bg-black focus:text-white">
                {i + 1}명
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[125px] mt-[36px] mb-[59px] relative">
        <div className="flex justify-between">
          <span>드로잉 시간</span>
        </div>
        <div>
          {/* 기본12초 멕시멈 40초, 제한없음 까지 */}
          <div className="mt-[16px] flex gap-[10px] absolute">
            {drawingTime.map((time, i) => (
              <button
                key={`${time}-${i}`}
                className="w-[84px] h-[48px] rounded-lg border border-[#DEDEDE] ease-in-out focus:bg-black focus:text-white"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
      <LargeBtn text="시작하기" active={false} />
    </div>
  );
}

'use client';
import LargeBtn from '@/src/components/LargeBtn';
import { useEffect, useRef, useState } from 'react';
import { moseoverHandler, timeSetMoseoverHandler } from './action';

export default function CreateRoom() {
  const [subjectText, setSubjectText] = useState('');
  const maxLength = 25;
  let hashtagArr = ['#어디에서', '#누가', '#무엇을', '#어떻게', '#하는것'];
  let drawingTime = ['제한없음', '12초', '16초', '20초'];
  let memberNumArr = new Array(6).fill(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timeSetSliderRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleTimeSetMouseOver = () => {
      const timeSetSlider = timeSetSliderRef.current;
      if (timeSetSlider) {
        timeSetSlider.addEventListener('wheel', (e) => {
          e.preventDefault();
        });
      }
    };
    const timeSetSlider = sliderRef.current;
    if (timeSetSlider) {
      timeSetSlider.addEventListener('mouseover', handleTimeSetMouseOver);
    }
    return () => {
      if (timeSetSlider) {
        timeSetSlider.removeEventListener('mouseover', handleTimeSetMouseOver);
      }
    };
  }, []);

  return (
    <div className="max-w-sm mt-[23.5px] p-5 bg-white custom-waguri-font">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span>드로잉 주제</span>
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
          className="mt-[16px] flex gap-[10px] overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide"
          id="slider"
          ref={sliderRef}
        >
          <form
            className="mt-[16px] w-full flex h-fit gap-[10px] overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide"
            id="drawingTimeSlider"
          >
            {memberNumArr.map((num, i) => (
              <div className="w-[40rem]" key={`${i}`}>
                <input
                  type="radio"
                  className="peer hidden"
                  id={`${num}-${i}`}
                  value={num}
                  name="answer"
                />
                <label
                  htmlFor={`${num}-${i}`}
                  className="block cursor-pointer select-none rounded-lg px-[25px] py-[10px] border border-[#DEDEDE] text-center peer-checked:bg-black peer-checked:text-white"
                >
                  {i + 1}명
                </label>
              </div>
            ))}
          </form>
        </div>
      </div>
      <div
        className="h-[125px] mt-[36px] mb-[59px] relative"
        onWheel={timeSetMoseoverHandler}
      >
        <div className="flex justify-between">
          <span>드로잉 시간</span>
        </div>
        <div>
          <div
            className="mt-[16px] flex gap-[10px] overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide"
            id="drawingTimeSlider"
            ref={timeSetSliderRef}
          >
            {drawingTime.map((time, i) => (
              <div className="w-[40rem]" key={`${time}-${i}`}>
                <input
                  type="radio"
                  className="peer hidden"
                  id={`${time}-${i}`}
                  value={time}
                  name="answer"
                />
                <label
                  htmlFor={`${time}-${i}`}
                  className="block cursor-pointer select-none rounded-lg p-3 border border-[#DEDEDE] text-center peer-checked:bg-black peer-checked:text-white"
                >
                  {time}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LargeBtn text="시작하기" active={false} />
    </div>
  );
}

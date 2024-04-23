'use client';

import { useEffect, useRef, useState } from 'react';
import { moseoverHandler, timeSetMoseoverHandler } from './action';
import LargeBtn from '@/src/components/LargeBtn';


export default function CreateRoom() {
  const [subjectText, setSubjectText] = useState('');
  const [memberOption, setMemberOption] = useState(false);
  const [timeOption, setTimeOption] = useState(false);

  const maxLength = 25;
  let hashtagArr = ['#어디에서', '#누가', '#무엇을', '#어떻게', '#하는것'];
  let memberNumArr = new Array(6).fill(0);
  let drawingTime = ['제한없음', '12초', '16초', '20초'];
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
  const handleSubjectTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectText(e.target.value);
  };

  const handleMemberCheck = () => [setMemberOption(true)];
  const handleTimeCheck = () => [setTimeOption(true)];

  return (
    <div className="custom-waguri-font mt-[23.5px] h-[844px] w-[390px] bg-white p-5">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span>드로잉 주제</span>
          <span>
            {subjectText.length}/{maxLength}
          </span>
        </div>
        <form className="mt-[16px] w-screen">
          <input
            className="w-[350px] rounded-lg border border-[#9B9B9B] p-3 placeholder:text-[#9B9B9B] "
            type="text"
            value={subjectText}
            onChange={handleSubjectTextChange}
            placeholder="멤버들과 그릴 그림 주제를 입력해주세요!"
            maxLength={25}
          />
        </form>
        <div className="mt-[14px] flex gap-[10px] text-sm">
          {hashtagArr.map((hashtag, index) => (
            <div key={`${hashtag}-${index}`}>
              <span>{hashtag}</span>
            </div>
          ))}
        </div>
        <div className="mt-[20px] flex h-[31px] w-[93px] items-center justify-center rounded-[4px] bg-[#F2F2F2] text-sm">
          <button className="text-[#9B9B9B]">예시문장보기</button>
          {/* 예시문장 들어갈 곳 */}
        </div>
      </div>
      <div className="mt-[64px] h-[94px] " onWheel={moseoverHandler}>
        <div className="relative flex justify-between">
          <span>참여 멤버 수</span>
          <span>최대 6명</span>
        </div>
        <form
          className="mt-[16px] flex h-fit w-full gap-[10px] overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap scrollbar-hide"
          id="slider"
        >
          {memberNumArr.map((num, i) => (
            <div className="w-[40rem]" key={`${i}`} id="item">
              <input
                type="radio"
                className="peer hidden"
                id={`${num}-${i}`}
                value={num}
                name="answer"
                onClick={handleMemberCheck}
              />
              <label
                htmlFor={`${num}-${i}`}
                className="block cursor-pointer select-none rounded-lg border border-[#DEDEDE] px-[29.53px] py-[11px] text-center peer-checked:bg-black peer-checked:text-white"
              >
                {i + 1}명
              </label>
            </div>
          ))}
        </form>
      </div>
      <div
        className="relative mb-[59px] mt-[36px] h-[125px]"
        onWheel={timeSetMoseoverHandler}
      >
        <div className="flex justify-between">
          <span>드로잉 시간</span>
        </div>
        <div>
          <form
            className="mt-[16px] flex gap-[10px] overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap scrollbar-hide"
            id="drawingTimeSlider"
          >
            {drawingTime.map((time, i) => (
              <div className="w-[40rem]" key={`${time}-${i}`} id="timeItem">
                <input
                  type="radio"
                  className="peer hidden"
                  id={`${time}-${i}`}
                  value={time}
                  name="answer"
                  onClick={handleTimeCheck}
                />
                <label
                  htmlFor={`${time}-${i}`}
                  className="block cursor-pointer select-none rounded-lg border border-[#DEDEDE] px-[30.5px] py-[11px] text-center peer-checked:bg-black peer-checked:text-white"
                >
                  {time}
                </label>
              </div>
            ))}
          </form>
        </div>
      </div>
      <LargeBtn
        text="시작하기"
        active={subjectText.length && memberOption && timeOption ? true : false}
      />
    </div>
  );
}

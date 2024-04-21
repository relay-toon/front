'use client';
import LargeBtn from '@/src/components/LargeBtn';
import { useEffect, useRef, useState } from 'react';
import { moseoverHandler, timeSetMoseoverHandler } from './action';
import { useForm, SubmitHandler } from 'react-hook-form';

interface subjectValue {
  drawingSubject: string;
}

export default function CreateRoom() {
  const { register, handleSubmit } = useForm<subjectValue>();
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
  const onSubmit: SubmitHandler<subjectValue> = ({ drawingSubject }) => {};

  const handleMemberCheck = () => [setMemberOption(true)];
  const handleTimeCheck = () => [setTimeOption(true)];

  return (
    <div className="w-[390px] mt-[23.5px] p-5 bg-white custom-waguri-font h-[844px]">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span>드로잉 주제</span>
          <span>
            {subjectText.length}/{maxLength}
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-screen mt-[16px]">
          <input
            {...register('drawingSubject', { required: true })}
            className="w-[350px] p-3 rounded-lg border border-[#9B9B9B] placeholder:text-[#9B9B9B] "
            type="text"
            value={subjectText}
            onChange={handleSubjectTextChange}
            placeholder="멤버들과 그릴 그림 주제를 입력해주세요!"
          />
        </form>
        <div className="flex gap-[10px] text-sm mt-[14px]">
          {hashtagArr.map((hashtag, index) => (
            <div key={`${hashtag}-${index}`}>
              <span>{hashtag}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-[93px] h-[31px] rounded-[4px] bg-[#F2F2F2] text-sm mt-[20px]">
          <button className="text-[#9B9B9B]">예시문장보기</button>
          {/* 예시문장 들어갈 곳 */}
        </div>
      </div>
      <div className="h-[94px] mt-[64px] " onWheel={moseoverHandler}>
        <div className="flex justify-between relative">
          <span>참여 멤버 수</span>
          <span>최대 6명</span>
        </div>
        <form
          className="mt-[16px] w-full flex h-fit gap-[10px] overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide"
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
                className="block cursor-pointer select-none rounded-lg px-[29.53px] py-[11px] border border-[#DEDEDE] text-center peer-checked:bg-black peer-checked:text-white"
              >
                {i + 1}명
              </label>
            </div>
          ))}
        </form>
      </div>
      <div
        className="h-[125px] mt-[36px] mb-[59px] relative"
        onWheel={timeSetMoseoverHandler}
      >
        <div className="flex justify-between">
          <span>드로잉 시간</span>
        </div>
        <div>
          <form
            className="mt-[16px] flex gap-[10px] overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide"
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
                  className="block cursor-pointer select-none rounded-lg px-[30.5px] py-[11px] border border-[#DEDEDE] text-center peer-checked:bg-black peer-checked:text-white"
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

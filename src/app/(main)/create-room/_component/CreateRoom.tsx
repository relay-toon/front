'use client';

import { useEffect, useRef, useState } from 'react';
import { mouseOverHandler, timeSetMouseOverHandler } from './action';
import LargeBtn from '@/src/components/LargeBtn';
import BackHeader from '@/src/components/header/BackHeader';
import { usePostToon } from '@/src/hooks/usePostToon';
import { CreateToonData } from '@/src/types/CreateToon';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/store/authStore';

interface ToonData {
  title: string;
  headCount: number;
  timer: number;
  id: string;
}
export default function CreateRoom() {
  const [subjectText, setSubjectText] = useState('');
  const [memberOption, setMemberOption] = useState(0);
  const [timeOption, setTimeOption] = useState<number>(0);

  const maxLength = 25;
  const hashtagArr = ['#어디에서', '#누가', '#무엇을', '#어떻게', '#하는것'];
  const memberNumArr = new Array(6).fill(0);
  const drawingTime = ['제한없음', '12초', '16초', '20초'];
  const sliderRef = useRef<HTMLDivElement>(null);
  const timeSetSliderRef = useRef<HTMLDivElement>(null);
  const createMutation = usePostToon();
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn]);
  const handleSubmit = async () => {
    try {
      const data: CreateToonData = {
        title: subjectText,
        headCount: memberOption,
        timer: timeOption,
      };
      const result = await createMutation.mutateAsync(data as ToonData);
      router?.push(`/drawing/${result.id}?count=1`);
    } catch (err) {
      console.log(err);
      alert('에러가 발생했습니다.');
    }
  };

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

  const handleMemberCheck = (num: number) => {
    setMemberOption(num);
  };

  const handleTimeCheck = (time: string) => {
    const numericTime =
      time === '제한없음' ? 86400 : parseInt(time.replace('초', ''), 10);
    setTimeOption(numericTime);
  };

  return (
    <div className="h-screen overflow-x-hidden bg-white">
      <BackHeader />
      <div className=" h-[844px] w-[390px] bg-white p-5">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="text-xl font-bold">드로잉 주제</span>
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
              maxLength={maxLength}
              placeholder="멤버들과 그릴 그림 주제를 입력해주세요!"
            />
          </form>
          <div className="mt-[14px] flex gap-[10px] text-sm">
            {hashtagArr.map((hashtag, index) => (
              <div key={`${hashtag}-${index}`}>
                <span>{hashtag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[64px] h-[94px] " onWheel={mouseOverHandler}>
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
                  onClick={() => handleMemberCheck(i + 1)}
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
          onWheel={timeSetMouseOverHandler}
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
                    onChange={(e) => handleTimeCheck(e.target.value)}
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
          active={
            subjectText.length &&
            memberOption &&
            (timeOption > 0 || timeOption === 0)
              ? true
              : false
          }
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

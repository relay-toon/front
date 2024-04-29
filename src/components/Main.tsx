'use client';

import Image from 'next/image';
import MenuHeader from './header/MenuHeader';
import LargeBtn from './LargeBtn';
import Link from 'next/link';
import '../app/styles/globals.css';
import { useAuthStore } from '../store/authStore';
import { useState } from 'react';
import MyPageSideBar from './MypageSidebar';

export default function Main() {
  const isLoggedIn = useAuthStore((state) => ({
    isLoggedIn: state.isLoggedIn,
    setIsLoggedIn: state.setIsLoggedIn,
  }));
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative overflow-x-hidden">
      <MenuHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="mt-[23.5px] p-5">
        <div className="flex justify-center">
          <Image
            src="/img/main-image.png"
            alt="main image"
            width={310}
            height={306}
          />
        </div>
        <span className="custom-waguri-font mt-9 flex justify-center text-xl font-normal">
          다함께 완성하는 릴레이툰!
        </span>
        <div className="mt-5">
          {isLoggedIn ? (
            <Link href="/create-room">
              <LargeBtn text="릴레이툰 시작하기" active={true} />
            </Link>
          ) : (
            <Link href="/login">
              <LargeBtn text="릴레이툰 시작하기" active={true} />
            </Link>
          )}
        </div>
        <div className="flew-row mt-[62.5px]  flex">
          <Image src="/svg/star.svg" alt="star" width={37} height={39} />
          <span className="custom-waguri-font ml-[0.2813rem] flex items-center text-xl font-normal">
            릴레이툰이란?
          </span>
        </div>
        <div className="mt-4 text-base">
          릴레이툰은 여러명이서 릴레이로{' '}
          <span className="font-bold text-[#464646]">이어그리는 그림</span>을 말
          <br />
          해요! 다같이 재미있는 그림을 완성해보세요!
        </div>
        <div className="mt-10 flex h-[180px] w-[350px] items-center rounded-xl bg-white">
          <div className="flex w-full flex-col p-5">
            <div className="flex flex-row">
              <span className="custom-waguri-font flex">
                1. 그림 주제 정하기
              </span>
              <span className="ml-[6px] flex items-center rounded-[10px] bg-[#E0FF68] px-2.5 py-0.5 text-xs font-bold">
                주제는 마스터가 직접 선정해요!
              </span>
            </div>
            <div className="ml-[32.5px] mr-[32.5px] mt-[34px] flex flex-row">
              <span className="text-[14px] font-bold">그림 주제</span>
              <span className="ml-[170px] text-[9.8px]">0/30</span>
            </div>
            <div>
              <Image
                src="/img/example-input.png"
                alt="example-input"
                width={245}
                height={33.6}
                className="mb-[19.4px] ml-auto mr-auto mt-2 flex"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <Image
            src="/svg/under-arrow.svg"
            alt="under-arrow"
            width={12}
            height={16}
          />
        </div>
        <div className="mt-4 flex h-[180px] w-[350px] items-center rounded-xl bg-white">
          <div className="flex h-full w-full flex-col p-5">
            <div className="flex flex-row">
              <span className="custom-waguri-font flex">
                2. 함께할 멤버 수 정하기
              </span>
              <span className="ml-[6px] flex items-center rounded-[10px] bg-[#E0FF68] px-2.5 py-0.5 text-xs font-bold">
                최대 6명까지
              </span>
            </div>
            <div className="ml-[37.15px] mt-[35.38px] flex flex-col">
              <div className="text-sm font-bold">참여 멤버 수</div>
              <div className="mt-2 flex flex-row gap-1  text-center">
                <div className="h-[30.44px] w-[54.8px] content-center rounded-[5.04px] border-[1px] border-[#DEDEDE]  bg-black text-[11.34px] font-medium text-white">
                  1명
                </div>
                <div className="h-[30.44px] w-[54.8px] content-center rounded-[5.04px] border-[1px] border-[#DEDEDE]  text-[11.34px] font-medium">
                  2명
                </div>
                <div className="h-[30.44px] w-[54.8px] content-center rounded-[5.04px] border-[1px] border-[#DEDEDE]  text-[11.34px] font-medium">
                  3명
                </div>
                <div className="h-[30.44px] w-[54.8px] content-center rounded-[5.04px] border-[1px] border-[#DEDEDE]  text-[11.34px] font-medium">
                  4명
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <Image
            src="/svg/under-arrow.svg"
            alt="under-arrow"
            width={12}
            height={16}
          />
        </div>
        <div className="mb-[116px] mt-4 flex h-[180px] w-[350px] items-center rounded-xl bg-white">
          <div className="flex h-full w-full flex-col p-5">
            <div className="flex flex-row">
              <span className="custom-waguri-font flex">
                3. 그림은 타임어택! 초 정하기
              </span>
              <span className="ml-[9px] flex items-center rounded-[10px] bg-[#E0FF68] px-2.5 py-0.5 text-xs font-bold">
                최대 인당 28초
              </span>
            </div>
            <div className="ml-[15.47px] flex flex-col">
              <div className="mt-[16px] text-sm font-bold">드로잉 시간</div>
              <div className="mt-2 text-[10px] font-bold leading-[15px] text-[#666666]">
                멤버당
              </div>
              <div className="mt-2 flex flex-row text-center">
                <div className="h-[30.44px] w-[77.8px] content-center rounded-[5.04px] border-[1px] border-[#DEDEDE]  bg-black text-[11.34px] font-medium text-white">
                  제한없음
                </div>
                <div className="ml-[7px] h-[30.44px] w-[61.8px] content-center rounded-[5.04px] border-[1px] border-[#DEDEDE]  text-[11.34px] font-medium">
                  12초
                </div>
                <div className="ml-[7px] h-[30.44px] w-[61.7px] content-center rounded-[5.04px] border-[1px] border-[#DEDEDE]  text-[11.34px] font-medium">
                  16초
                </div>
                <div className="ml-[7px] h-[30.44px] w-[61.7px] content-center rounded-[5.04px] border-[1px] border-[#DEDEDE]  text-[11.34px] font-medium">
                  20초
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`fixed top-0 z-10 h-[100vh] w-[390px] bg-gray-400 transition-all duration-200 ease-in-out`}
          style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
          onClick={onClick}
        >
          <MyPageSideBar
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            isLoggedIn={isLoggedIn ? true : false}
          />
        </div>
      )}
    </div>
  );
}

'use client';

import LargeBtn from '@/src/components/LargeBtn';
import MyPageSideBar from '@/src/components/MypageSidebar';
import MenuHeader from '@/src/components/header/MenuHeader';
import { useGetMyInfo } from '@/src/hooks/useGetMyInfo';
import { useGetToonInfo } from '@/src/hooks/useGetToonInfo';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function PrevPicture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [index, setIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams<{ id: string }>();

  const searchParam = useSearchParams();
  let count = searchParam.get('count');
  // let count = 0
  console.log(count);

  const onClick = () => {
    const canvas = canvasRef.current;
    const data = canvas?.toDataURL();
    console.log(data);
    console.log(canvas);
  };

  const { data: myCreatedToon = [] } = useGetToonInfo(params.id);
  const { data: myInfo = [] } = useGetMyInfo();
  console.log('myCreatedToon : ', myCreatedToon);

  const headCount = new Array(myCreatedToon.headCount).fill(0);

  return (
    <div className="mb-[1rem] mt-[48px] flex h-screen flex-col">
      <div className="flex justify-between">
        <MenuHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className=" mt-[7px] flex flex-col items-center gap-[16px]">
        <div className="custom-waguri-font flex text-[24px] font-[400]">
          <span>1번째로&nbsp;&nbsp;</span>
          <span className="text-[#9B9B9B]">그리기</span>
        </div>
        <div className="custom-pretendard-font flex h-[44px] flex-col items-center text-[14px] font-[600] leading-[22.4px]">
          <span>
            릴레이툰의 <span className="text-[#666666]">{index}번째 주자</span>
            입니다
          </span>
          <span>그림을 시작해주세요!</span>
        </div>
        <div className="bg- flex h-[42px] gap-[18px]">
          {headCount.map((item, i) => {
            if (i + 1 === Number(count)) {
              return (
                <Image
                  key={i}
                  src="/img/currentUser.png"
                  width={34.74}
                  height={42}
                  alt="waitingUser"   
                />
              );
            } else {
              return (
                <Image
                  key={i}
                  src="/img/waitingUser.png"
                  width={24}
                  height={28.85}
                  alt="current"
                />
              );
            }
          })}
        </div>
      </div>
      <div className="mt-[20px] flex justify-center">
        {myCreatedToon.image ? (
          <Image
            src={myCreatedToon.image}
            width={280}
            height={384}
            alt="prevImage"
          />
        ) : (
          <div className="h-[384px] w-[280px] bg-white" />
        )}
      </div>
      <Link
        href={{
          pathname: `/drawing/${myCreatedToon.id}`,
          query: { count: Number(count)},
        }}
        className="mt-[16px] flex justify-center"
      >
        <LargeBtn text="이어 그리기" active={true} />
      </Link>
      {isOpen && (
        <div
          className={`fixed top-0 z-10 mt-[16px] h-[100vh] w-[390px] bg-gray-400 transition-all duration-200 ease-in-out `}
          style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
          onClick={onClick}
        >
          <MyPageSideBar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      )}
    </div>
  );
}

'use client';

import LargeBtn from '@/src/components/LargeBtn';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import MyPageSideBar from '@/src/components/MypageSidebar';
import MenuHeader from '@/src/components/header/MenuHeader';
import { useGetToonInfo } from '@/src/hooks/useGetToonInfo';
import { useGetMyInfo } from '@/src/hooks/useGetMyInfo';
import Image from 'next/image';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useGetLock } from '@/src/hooks/useGetLock';
import ModalIsLoggedIn from '@/src/components/ModalIsLoggedIn';

export default function PrevPicture() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const searchParam = useSearchParams();
  const { data: toonInfo } = useGetToonInfo(params.id);
  const { data: myInfo } = useGetMyInfo();
  const { refetch: GetLock } = useGetLock(params.id);
  const count = searchParam.get('count');
  useEffect(() => {
    if (toonInfo && toonInfo.completed === true) {
      alert('이미 완성된 그림입니다.');
      router.push('/');
    }
  }, [toonInfo, myInfo]);
  if (!toonInfo) {
    return <LoadingSpinner />;
  }

  const onDrawingClick = async () => {
    if (myInfo) {
      if (
        toonInfo.ownerId === myInfo.id ||
        toonInfo.participants.includes(myInfo.id)
      ) {
        alert('이미 참여한 그림입니다.');
        return router.push('/');
      }
    }
    if (toonInfo.lockId !== null) {
      alert('현재 누군가 열심히 그리고 있습니다.');
      return;
    } else {
      const lockResponse = await GetLock();
      if (lockResponse.data) {
        router.push(`/drawing/${params.id}?count=${count}`);
      }
    }
  };
  const headCount = new Array(toonInfo.headCount).fill(0);

  return (
    <div>
      <div className="flex justify-between">
        <MenuHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="mb-[1rem] mt-[48px] flex flex-col">
        <div className=" mt-[7px] flex flex-col items-center gap-[16px]">
          <div className="custom-waguri-font flex text-[24px] font-[400]">
            <span>{toonInfo?.participants.length + 1}번째로&nbsp;&nbsp;</span>
            <span className="text-[#9B9B9B]">그리기</span>
          </div>
          <div className="custom-pretendard-font flex h-[44px] flex-col items-center text-[14px] font-[600] leading-[22.4px]">
            <span>
              릴레이툰의 {}
              <span className="text-[#666666]">
                {toonInfo.participants.length + 1}번째 주자
              </span>
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
                    src="/svg/gray-person.svg"
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
          {toonInfo?.image ? (
            <Image
              src={toonInfo?.image}
              width={280}
              height={364}
              alt="prevImage"
              className="h-[364px] w-[280px] rounded-[6.4px] border-2 border-[#E0FF68]"
            />
          ) : (
            <div className="h-[384px] w-[280px] bg-white" />
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <div className="py-[14px]">
            {myInfo &&
            (toonInfo?.participants?.includes(myInfo.id) ||
              toonInfo?.ownerId === myInfo.id ||
              toonInfo.lockId !== null) ? (
              <LargeBtn
                text="이미 참여한 그림입니다"
                onClick={onDrawingClick}
                active={false}
              />
            ) : (
              <LargeBtn
                text="이어 그리기"
                onClick={onDrawingClick}
                active={true}
              />
            )}
          </div>
        </div>
        {isOpen && (
          <div
            className={
              'fixed -top-4 z-20 mt-[16px] h-full w-[390px] bg-gray-400 transition-all duration-200 ease-in-out'
            }
            style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
          >
            <MyPageSideBar setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
        )}
        {isLoggedIn && (
          <ModalIsLoggedIn
            params={params.id}
            count={count}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </div>
    </div>
  );
}

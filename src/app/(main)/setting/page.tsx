'use client';
import { useLogout } from '@/src/hooks/useLogout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAxios } from '@/src/lib/axios';
import { useDelteUser } from '@/src/hooks/useDeleteUser';
import { useState } from 'react';
import ModalConfirmCancelAccount from '@/src/components/ModalConfirmCancelAccount';
import ModalConfirmLogout from '@/src/components/ModalConfirmLogoutcopy';
import ModalLogout from '@/src/components/ModalLogout';
import ModalCancelAccount from '@/src/components/ModalCancelAccount';

export default function Mypage() {
  const [isDelete, setIsDelete] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  const router = useRouter();
  const { axiosInstance } = useAxios();
  const onClick = () => {
    router.back();
  };

  const logoutAccount = () => {
    setIsLogout(true);
  };


  const deleteAccount = () => {
    setIsDelete(true);
  };
  return (
    <div className="relative mt-[47px] h-screen bg-[#F7F7F7]">
      <div className=" flex h-[48px] items-center justify-center bg-white">
        <div
          onClick={onClick}
          className="absolute left-[12px] size-[26px] cursor-pointer"
        >
          <Image src="/svg/header-back.svg" alt="back" width={26} height={26} />
        </div>
        <span className="text-[18px] font-bold">MY페이지</span>
      </div>

      <div className="custom-pretendard-font flex flex-col gap-[10px]">
        <div className="flex h-[128px] flex-col gap-6 bg-white px-5 py-[28px]">
          <span className="text-[14px] text-[#9B9B9B]">내정보</span>
          <Link href="/mypage">
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-semibold">계정 정보</span>
              <div className="h-[18px] w-[16px]">
                <Image
                  src="/img/right.png"
                  width={16}
                  height={18}
                  alt="right"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex h-[183px] flex-col gap-6 bg-white px-5 py-[28px]">
          <span className="text-[14px] text-[#9B9B9B]">계정관리</span>
          <div className="flex flex-col gap-[20px] text-[18px] font-semibold">
            <p onClick={logoutAccount} className="cursor-pointer">
              로그아웃
            </p>
            <p onClick={deleteAccount} className="cursor-pointer">
              탈퇴하기
            </p>
          </div>
        </div>

        <div className="flex h-[183px] flex-col gap-6 bg-white px-5 py-[28px]">
          <span className="text-[14px] text-[#9B9B9B]">기타</span>
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-semibold">약관 및 정책</span>
            <div className="h-[18px] w-[16px]">
              <Image src="/img/right.png" width={16} height={18} alt="right" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-semibold">
              개인 정보 처리 방침
            </span>
            <div className="h-[18px] w-[16px]">
              <Image src="/img/right.png" width={16} height={18} alt="right" />
            </div>
          </div>
        </div>
      </div>
      {isDelete ? (
        <div
          className="margin-auto fixed top-0 h-[100vh] w-[390px] overflow-hidden"
          style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
        >
          <ModalCancelAccount setIsDelete={setIsDelete} />
        </div>
      ) : isLogout ? (
        <div
          className="margin-auto fixed top-0 h-[100vh] w-[390px] overflow-hidden"
          style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
        >
          <ModalLogout isLogout={isLogout} setIsLogout={setIsLogout} />
        </div>
      ) : null}
    </div>
  );
}

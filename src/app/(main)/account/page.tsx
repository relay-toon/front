'use client';
import { useAuthStore } from '@/src/store/authStore';
import { useGetMyInfo } from '@/src/hooks/useGetMyInfo';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ModalNickname from '@/src/components/ModalNickname';
import BackHeader from '@/src/components/header/BackHeader';
export default function AccountPage() {
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const { isLoggedIn } = useAuthStore();
  const { data: myInfo } = useGetMyInfo();
  const onNicknameClick = () => {
    setShowNicknameModal(!showNicknameModal);
  };
  const closeNicknameModal = () => {
    setShowNicknameModal(false);
  };
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowNicknameModal(false);
    }
  };
  return (
    <div>
      <BackHeader />
      <div className="ml-auto mr-auto h-[82px] w-[350px]">
        <div className="mt-[19px] flex h-[82px] w-[350px] items-center rounded-[12px] bg-white px-[20px]">
          <div className="flex w-full text-[20px] font-bold">
            <>
              <div className=" flex  w-full items-center justify-between">
                <div className="flex">{myInfo?.name}</div>
                <Image
                  src="/img/shareIcon.png"
                  alt="share"
                  width={20}
                  height={20}
                  onClick={onNicknameClick}
                  className="flex h-[20px] cursor-pointer"
                />
              </div>
            </>
          </div>
        </div>
        {showNicknameModal && (
          <div
            className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleCloseModal}
          >
            <ModalNickname closeModal={closeNicknameModal} />
          </div>
        )}
      </div>
      <div className="ml-7 mt-4 ">로그인 정보 : {myInfo?.provider}</div>
    </div>
  );
}

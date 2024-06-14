'use client';
import ModalNickname from '@/src/components/ModalNickname';
import BackHeader from '@/src/components/header/BackHeader';
import { useGetMyInfo } from '@/src/hooks/useGetMyInfo';
import { useAuthStore } from '@/src/store/authStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Mypage() {
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowNicknameModal(false);
    }
  };
  const closeNicknameModal = () => {
    setShowNicknameModal(false);
  };
  const { data: myInfo } = useGetMyInfo();
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const onNicknameClick = () => {
    setShowNicknameModal(!showNicknameModal);
  };
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn]);
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <BackHeader text="계정정보" />
      <div className="mt-[37px] flex h-[82px] w-[350px] items-center justify-between rounded-[12px] bg-white px-[20px]">
        <span className="text-[20px] font-bold">
          <span>{myInfo?.name}</span>
        </span>
        <Image
          src="/img/shareIcon.png"
          alt="share"
          width={20}
          height={20}
          onClick={onNicknameClick}
          className="cursor-pointer"
        />
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
  );
}

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useGetMyInfo } from '../hooks/useGetMyInfo';
import ModalNickname from './ModalNickname';
import { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { useRouter } from 'next/navigation';

interface IsLoggedIn {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MyPageSideBar({ isOpen, setIsOpen }: IsLoggedIn) {
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();
  const onXClick = () => {
    setIsOpen(false);
  };
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowNicknameModal(false);
    }
  };

  const onNicknameClick = () => {
    setShowNicknameModal(!showNicknameModal);
  };
  const closeNicknameModal = () => {
    setShowNicknameModal(false);
  };

  const suggestBody = encodeURIComponent('건의내용을 적어주세요.');
  const mailto = () => {
    if (isLoggedIn) {
      window.location.href = `mailto:${process.env.NEXT_PUBLIC_SUGGEST_EMAIL}?body=${suggestBody}`;
    } else {
      router.push('/login');
    }
  };
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    if (!isLoggedIn) {
      e.preventDefault();
      router.push('/login');
    } else {
      router.push(path);
    }
  };
  const { data: myInfo } = useGetMyInfo();

  return (
    <div
      className={`custom-pretendard-font absolute top-0 z-20 w-[310px] ${isOpen ? `right-0 transition-all duration-200 ease-in-out` : `right-[-320px] transition-transform duration-200 ease-in-out`} flex h-screen flex-col items-center bg-[#F7F7F7]`}
    >
      <div className="relative mt-[58px] flex h-[48px] items-center justify-center text-lg ">
        <div
          className="absolute left-[-87px] flex h-[26px] w-[26px] items-center justify-center"
          onClick={onXClick}
        >
          <Image
            src="/img/close.png"
            alt="close"
            width={26}
            height={26}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-center text-center font-bold">
          <span>MY페이지</span>
        </div>
      </div>
      <div className="mt-[19px] flex h-[82px] w-[266px] items-center justify-between rounded-[12px] bg-white px-[20px]">
        <span className="text-[20px] font-bold">
          {isLoggedIn ? (
            <Link href="/mypage">
              <span>{myInfo?.name}</span>
            </Link>
          ) : (
            <Link href="/login">
              <span>로그인하기</span>
            </Link>
          )}
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

      <div className="mt-[28px] flex h-[254px] w-[266px] flex-col items-center justify-center rounded-[12px] bg-white">
        <div>
          <div className="flex h-[60px] w-[218px] items-center justify-start border-b-[1.5px] border-b-[#F7F7F7]">
            <div
              className="flex cursor-pointer"
              onClick={(e) => handleLinkClick(e, '/my-gallery')}
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/img/pictureGaller.png"
                  alt="picture-gallery"
                  width={28}
                  height={28}
                />
              </div>
              <span className="pl-[2px] text-[16px] font-semibold">
                그림 갤러리
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex h-[60px] w-[218px] items-center justify-start border-b-[1.5px] border-b-[#F7F7F7]">
            <div
              className="flex cursor-pointer"
              onClick={(e) => handleLinkClick(e, '/coming-soon')}
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/img/store.png"
                  alt="store"
                  width={28}
                  height={28}
                />
              </div>
              <span className="pl-[2px] text-[16px] font-semibold">스토어</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex h-[60px] w-[218px] items-center justify-start border-b-[1.5px] border-b-[#F7F7F7]">
            <div className="flex cursor-pointer" onClick={mailto}>
              <div className="flex items-center justify-center">
                <Image
                  src="/img/inquiry.png"
                  alt="inquiry"
                  width={28}
                  height={28}
                />
              </div>
              <span className="pl-[2px] text-[16px] font-semibold">
                문의하기
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex h-[60px] w-[218px] items-center justify-start">
            <div
              className="flex cursor-pointer"
              onClick={(e) => handleLinkClick(e, '/inquiry')}
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/img/suggest.png"
                  alt="picture-gallery"
                  width={28}
                  height={28}
                />
              </div>
              <span className="pl-[2px] text-[16px] font-semibold">
                건의하기
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[56px] flex h-[141px] flex-col gap-[32px] *:font-semibold">
        <button onClick={(e) => handleLinkClick(e, '/info')}>
          <div className="flex h-[48px] w-[168px] items-center justify-center rounded-[8px] bg-[#EAEAEA]">
            공지사항
          </div>
        </button>
        <button onClick={(e) => handleLinkClick(e, '/setting')}>
          <div className="flex h-[48px] w-[168px] items-center justify-center rounded-[8px] bg-[#EAEAEA]">
            설정
          </div>
        </button>
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

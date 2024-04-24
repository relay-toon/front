'use client';
import SaveButton from '@/src/components/SaveButton';
import ShareButton from '@/src/components/ShareButton';
import BackHeader from '@/src/components/header/BackHeader';
import Image from 'next/image';
import { useState } from 'react';
import MemberModal from '../_component/MemberModal';

export default function ItemPage() {
  const now = Date.now();
  const date = new Date(now).toLocaleDateString();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const userName = [
    '가나다라마바사아자차카타',
    '총닉네임 12자',
    '유저C',
    '유저D',
    '유저E',
    '유저F',
    '유저G',
    '유저H',
  ];
  return (
    <div className="relative mb-[100px]">
      {showModal && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <MemberModal users={userName} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
      <BackHeader text="그림상세" />
      <div className="align-center mt-4 flex justify-center text-base text-[#9E9E9E]">
        {date}
      </div>
      <div className="align-center ml-auto mr-auto flex w-[280px] rounded-md bg-white text-center">
        <div className="flex-start flex px-[18.5px] py-3 text-xs">테스트</div>
      </div>
      <div className="ml-auto mr-auto mt-4 flex h-[364px] w-[280px] items-center rounded-md bg-white">
        <Image
          src="/img/draw-example.png"
          alt="picture-gallery"
          width={280}
          height={280}
        />
      </div>
      <div className="my-[15px] ml-auto mr-auto flex h-14 w-[350px] flex-row content-between items-center justify-between rounded-lg bg-[#EAEAEA] px-[23px] text-base font-semibold text-[#666666]">
        <div>참여 멤버</div>
        <div
          className=" flex cursor-pointer flex-row items-center"
          onClick={handleOpenModal}
        >
          {userName.length}명
          <Image
            src="/svg/right-arrow.svg"
            alt="arrow"
            width={26}
            height={26}
          />
        </div>
      </div>
      <div className="relative mt-5 flex justify-center gap-[14px]">
        <SaveButton />
        <ShareButton />
      </div>
    </div>
  );
}

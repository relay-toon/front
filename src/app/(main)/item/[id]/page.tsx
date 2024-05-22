'use client';
import SaveButton from '@/src/components/SaveButton';
import ShareButton from '@/src/components/ShareButton';
import BackHeader from '@/src/components/header/BackHeader';
import Image from 'next/image';
import { useState } from 'react';
import MemberModal from '../_component/MemberModal';
import { useGetToonInfo } from '@/src/hooks/useGetToonInfo';

export default function ItemPage({ params }: { params: { id: string } }) {
  const now = Date.now();
  const date = new Date(now).toLocaleDateString();
  const id = params.id;
  const { data: toon } = useGetToonInfo(id);
  // console.log(toon);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div className="mb-[100px]">
      {showModal && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <MemberModal
            users={toon.participants}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <BackHeader text="그림상세" />
      <div className="align-center mt-4 flex justify-center text-base text-[#9E9E9E]">
        {date}
      </div>
      <div className="align-center ml-auto mr-auto flex w-[280px] rounded-md bg-white text-center">
        <div className="flex-start flex px-[18.5px] py-3 text-xs">
          {toon?.title}
        </div>
      </div>
      <div className="ml-auto mr-auto mt-4 flex h-[364px] w-[280px] items-center rounded-md bg-white">
        {toon?.image ? (
          <img
            src={toon.image}
            alt={toon.title}
            className="mt-5 h-full w-full  rounded-md"
          />
        ) : (
          <div className=" h-full w-full rounded-md bg-white"></div>
        )}
      </div>
      <div className="my-[15px] ml-auto mr-auto flex h-14 w-[350px] flex-row content-between items-center justify-between rounded-lg bg-[#EAEAEA] px-[23px] text-base font-semibold text-[#666666]">
        <div>참여 멤버</div>
        <div
          className=" flex cursor-pointer flex-row items-center"
          onClick={handleOpenModal}
        >
          {toon?.participants.length}명
          <Image
            src="/svg/right-arrow.svg"
            alt="arrow"
            width={26}
            height={26}
          />
        </div>
      </div>
      <div className="mb-[116px] mt-9 flex flex-row justify-center gap-[14px]">
        <SaveButton />
        <ShareButton id={id} />
      </div>
    </div>
  );
}

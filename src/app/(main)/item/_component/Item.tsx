'use client';
import SaveButton from '@/src/components/SaveButton';
import ShareButton from '@/src/components/ShareButton';
import BackHeader from '@/src/components/header/BackHeader';
import Image from 'next/image';
import { useState } from 'react';
import MemberModal from './MemberModal';
import { useGetToonInfo } from '@/src/hooks/useGetToonInfo';
import { useDeleteToon } from '@/src/hooks/useDeleteToon';
interface ItemProps {
  id: string;
}
export default function ItemPage({ id }: ItemProps) {
  const now = Date.now();
  const date = new Date(now).toLocaleDateString();

  const { data: toon, refetch } = useGetToonInfo(id);
  const [showModal, setShowModal] = useState(false);
  const { mutate: deleteToon } = useDeleteToon();

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const handleDeleteToon = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteToon(id, {
        onSuccess: () => {
          refetch();
        },
      });
    } else {
      return;
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
      <div className="relative ml-auto mr-auto mt-4 flex h-[364px] w-[280px] items-center rounded-md bg-white">
        <div
          onClick={handleDeleteToon}
          className="absolute right-2 top-2 cursor-pointer opacity-50 hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
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
      <div className="ml-auto  mr-auto mt-[20px] flex h-14 w-[350px] flex-row content-between items-center justify-between rounded-lg bg-[#EAEAEA] px-[23px] text-base font-semibold text-[#666666]">
        <span>참여 멤버</span>
        <div
          className=" flex cursor-pointer flex-row items-center"
          onClick={handleOpenModal}
        >
          {toon?.participants?.length}명
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

'use client';

import { SetStateAction } from 'react';
import { useDelteUser } from '../hooks/useDeleteUser';
import { useAxios } from '../lib/axios';
import { useDeleteToon } from '../hooks/useDeleteToon';

interface ToonDelete {
  setConfirmDelte: React.Dispatch<SetStateAction<boolean>>;
}
export default function ModalToonDelete({ setConfirmDelte }: ToonDelete) {
  const onQuitClick = () => {
    setConfirmDelte(false);
  };
  const { axiosInstance } = useAxios();
  const onDelte = () => {
    useDeleteToon(axiosInstance, id)
  };
  return (
    <>
      <div
        className="margin-auto fixed top-0 h-[100vh] w-[390px] overflow-hidden"
        style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
      ></div>
      <div className="*:custom-pretendard-font absolute left-[12%] top-1/3 flex h-[189px] w-[300px] flex-col items-center rounded-[12px] bg-white">
        <div className="flex h-[129px] w-[300px] flex-col items-center justify-center gap-[8px] font-medium">
          <span className="text-[20px] ">그림을 삭제하시겠어요?</span>
        </div>
        <div className="border-t-F2F2F2 flex h-[60px] border-t border-t-[#F2F2F2] text-[16px] font-bold ">
          <div className="flex w-[150px] cursor-pointer items-center justify-center">
            <span onClick={onQuitClick}>취소</span>
          </div>
          <div className="flex w-[150px] cursor-pointer items-center justify-center text-[#D84D45]">
            <span>삭제하기</span>
          </div>
        </div>
      </div>
    </>
  );
}

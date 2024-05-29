'use client';

import { useDeleteUser } from '../hooks/useDeleteUser';
import { useAxios } from '../lib/axios';

interface ModalCancelAccount {
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalCancelAccount({
  setIsDelete,
}: ModalCancelAccount) {
  const { axiosInstance } = useAxios();
  const deleteUser = useDeleteUser(axiosInstance);
  const onQuitClick = () => {
    setIsDelete(false);
  };

  const useDelete = useDeleteUser(axiosInstance);

  const onUserDeleteClick = async () => {
    await deleteUser();
  };
  const onBackgroundClick = () => {
    setIsDelete(false);
  };

  return (
    <>
      <div
        onClick={onBackgroundClick}
        className="margin-auto fixed top-0 h-[100vh] w-[390px] overflow-hidden"
        style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
      ></div>
      <div className="*:custom-pretendard-font absolute left-[12%] top-1/3 flex h-[189px] w-[300px] flex-col items-center rounded-[12px] bg-white">
        <div className="flex h-[129px] w-[300px] flex-col items-center justify-center gap-[8px] font-medium">
          <span className="text-[20px] ">탈퇴를 진행 하시겠어요?</span>
          <span className="text-[16px] text-[#9E9E9E] ">
            모든 정보는 복구가 불가능합니다.
          </span>
        </div>
        <div className="border-t-F2F2F2 flex h-[60px] border-t border-t-[#F2F2F2] text-[16px] font-bold ">
          <div
            onClick={onQuitClick}
            className="flex w-[150px] cursor-pointer items-center justify-center"
          >
            <span>취소</span>
          </div>
          <div
            onClick={onUserDeleteClick}
            className="flex w-[150px] cursor-pointer items-center justify-center text-[#D84D45]"
          >
            <span>탈퇴하기</span>
          </div>
        </div>
      </div>
    </>
  );
}

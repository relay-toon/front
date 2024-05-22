'use client';

import { useLogout } from '../hooks/useLogout';
import { useAxios } from '../lib/axios';

interface ModalLogout {
  isLogout: boolean;
  setIsLogout: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalLogout({ isLogout, setIsLogout }: ModalLogout) {
  const onQuitClick = () => {
    setIsLogout(false);
  };

  const { axiosInstance } = useAxios();
  const logout = useLogout(axiosInstance);

  const onLogoutClick = async () => {
    await logout();
  };

  const onBackgroundClick = ()=>{
    setIsLogout(false)
  }

  return (
    <>
      <div
      onClick={onBackgroundClick}
        className="margin-auto fixed top-0 h-[100vh] w-[390px] overflow-hidden"
        style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
      ></div>
      <div className="*:custom-pretendard-font absolute left-[12%] top-1/3 flex h-[189px] w-[300px] flex-col items-center rounded-[12px] bg-white">
        <div className="flex h-[129px] w-[300px] items-center justify-center ">
          <span className="text-[20px] ">로그아웃 하시겠어요?</span>
        </div>
        <div className=" flex h-[60px] border-t border-t-[#F2F2F2] text-[16px] font-bold ">
          <div
            className="flex w-[150px] cursor-pointer items-center justify-center"
            onClick={onQuitClick}
          >
            <span>취소</span>
          </div>
          <div
            className="flex w-[150px] cursor-pointer items-center justify-center text-[#D84D45]"
            onClick={onLogoutClick}
          >
            <span>로그아웃</span>
          </div>
        </div>
      </div>
    </>
  );
}

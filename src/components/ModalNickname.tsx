'use client';

import { useState } from 'react';
import { usePutMyName } from '../hooks/usePutMyName';

export default function ModalNickname({ closeModal }: { closeModal: any }) {
  const [nickname, setNickname] = useState('');
  const { mutate: putMyName } = usePutMyName();
  const onNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleUpdateNickname = () => {
    putMyName(nickname, {
      onSuccess: () => {
        alert('닉네임이 변경되었습니다.');
        closeModal();
      },
      onError: () => {
        alert('닉네임 변경에 실패했습니다.');
      },
    });
  };

  return (
    <div className="absolute  z-[60] flex h-[273px] w-[296px] flex-col items-center justify-center rounded-[12px] bg-white">
      <div className="custom-waguri-font text-[20px]">
        <span>닉네임 설정</span>
      </div>
      <div className="mt-[20px] flex flex-col gap-[2px]">
        <div className="custom-pretendard-font flex justify-end text-[14px]">
          <span>{nickname.length}</span>
          <span className="text-[#9B9B9B]">/12</span>
        </div>
        <div>
          <input
            aria-label="닉네임 입력"
            className="h-[54px] w-[216px] rounded-[8px] border border-[#DEDEDE] px-[16px] placeholder:text-[14px] placeholder:text-[#9B9B9B]"
            type="text"
            value={nickname}
            placeholder="이름/닉네임을 입력해주세요!"
            required
            maxLength={12}
            onChange={onNicknameChange}
          />
        </div>
      </div>
      <div className="mt-[40px]">
        <button
          className="custom-pretendard-font h-[50px] w-[140px] rounded-[6px] bg-black font-bold text-white"
          onClick={handleUpdateNickname}
        >
          완료
        </button>
      </div>
    </div>
  );
}

'use client';

import { ChangeEvent, useState } from 'react';

export default function ModalNickname() {
  const [nickname, setNickname] = useState('');

  const onNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  return (
    <div className="flex h-[273px] w-[296px] flex-col items-center justify-center rounded-[12px] bg-white">
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
            className="border-[#DEDEDE h-[54px] w-[216px] rounded-[8px] border px-[16px] placeholder:text-[14px] placeholder:text-[#9B9B9B]"
            type="text"
            value={nickname}
            placeholder="이름/닉네임을 입력해주세요!"
            required
            onChange={onNicknameChange}
          />
        </div>
      </div>
      <div className="mt-[40px]">
        <button className="custom-pretendard-font h-[50px] w-[140px] rounded-[6px] bg-black font-bold text-white">
          완료
        </button>
      </div>
    </div>
  );
}

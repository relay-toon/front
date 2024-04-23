'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

export default function ModalPainterName() {
  const [name, setName] = useState('');

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onClick = () => {};
  return (
    <div className="flex h-[280px] w-[296px] flex-col items-center justify-center rounded-[12px] px-5 py-3">
      <div className="custom-waguri-font flex flex-col items-center gap-2">
        <div className="flex h-[27px] w-[111px] items-center justify-center gap-2 text-[#9B9B9B]">
          <Image
            src="/img/timeover.png"
            alt="timeover"
            width={26}
            height={25.96}
          />
          <span>타임 오버!</span>
        </div>
        <span className="text-center text-xl">그린 이 이름 입력</span>
      </div>
      <div className="mt-[8px] flex w-[216px] justify-end">
        <span>{name.length}</span>
        <span className="text-[#9B9B9B]">/12</span>
      </div>
      <input
        maxLength={12}
        value={name}
        onChange={onNameChange}
        type="text"
        placeholder="이름/닉네임을 입력해주세요!"
        className="mt-[2px] h-[54px] w-[216px] rounded-lg p-4 placeholder:border placeholder:border-[#DEDEDE] placeholder:text-[16px] focus:ring-1 focus:ring-black"
      />
      <Link href={'/'} className="mt-[24px]">
        <button
          className="h-[50px] w-[140px] rounded-[6px] bg-black text-lg font-bold text-white"
          onClick={onClick}
        >
          완료
        </button>
      </Link>
    </div>
  );
}

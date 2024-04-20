'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

export default function PainterName() {
  const [name, setName] = useState('');

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className="w-[296px] h-[280px] bg-slate-200 flex flex-col justify-center items-center rounded-[12px] py-3 px-5">
      <div className="flex flex-col items-center gap-2 custom-waguri-font">
        <div className="flex justify-center items-center gap-2 w-[111px] h-[27px] text-[#9B9B9B]">
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
      <div className="flex justify-end w-[216px] mt-[8px]">
        <span>{name.length}</span>
        <span className="text-[#9B9B9B]">/12</span>
      </div>
      <input
        maxLength={12}
        value={name}
        onChange={onNameChange}
        type="text"
        placeholder="이름/닉네임을 입력해주세요!"
        className="w-[216px] h-[54px] placeholder:border placeholder:border-[#DEDEDE] p-4 focus:ring-1 focus:ring-black rounded-lg placeholder:text-[16px] mt-[2px]"
      />
      <Link href={'/'} className="mt-[24px]">
        <button className="w-[140px] h-[50px] text-lg bg-black text-white rounded-[6px] font-bold">
          완료
        </button>
      </Link>
    </div>
  );
}

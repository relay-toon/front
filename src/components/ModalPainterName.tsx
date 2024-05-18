'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, SetStateAction, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
interface PainterName {
  setPainterName: React.Dispatch<SetStateAction<string>>;
  savePicture?: () => void;
  
}

export default function ModalPainterName({
  setPainterName,
  savePicture,
  
}: PainterName) {
  const [name, setName] = useState('');
  const { id } = useParams();
  const searchParam = useSearchParams();
  const count = searchParam.get('count');
  const router = useRouter();
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onClick = () => {
    setPainterName(name);
    router.push(`/finished-drawing/${id}?count=${count}`);
  };



  return (
    <div className="absolute left-[12%] top-1/3 z-40 flex h-[280px] w-[296px] flex-col items-center justify-center rounded-[12px] bg-white px-5 py-3">
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
        required={true}
        maxLength={12}
        value={name}
        onChange={onNameChange}
        type="text"
        placeholder="이름/닉네임을 입력해주세요!"
        className="mt-[2px] h-[54px] w-[216px] rounded-lg border border-[#DEDEDE] p-4 placeholder:border placeholder:border-[#DEDEDE] placeholder:text-[16px] focus:ring-1 focus:ring-black"
      />
      <div
        onClick={savePicture}
        // href={{
        //   pathname: `/finished-drawing/${id}`,
        //   query: { count: Number(count) },
        // }}
        className="mt-[24px]"
      >
        <button
          className="h-[50px] w-[140px] rounded-[6px] bg-black text-lg font-bold text-white"
          onClick={onClick}
        >
          완료
        </button>
      </div>
    </div>
  );
}

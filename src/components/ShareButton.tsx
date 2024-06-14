'use client';

import { SetStateAction } from 'react';

interface IShare {
  setIsShare: React.Dispatch<SetStateAction<boolean>>;
}

export default function ShareButton({ setIsShare }: IShare) {
  const onClick = () => {
    setIsShare(true);
  };
  return (
    <>
      <button
        className="custom-waguri-font h-[58px] w-[168px] rounded-[10px] bg-share-button text-black hover:bg-[#C4DF58]"
        onClick={onClick}
      >
        공유하기
      </button>
    </>
  );
}

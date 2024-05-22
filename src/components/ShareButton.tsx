'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import ModalShare from './ModalShare';

interface IShare {
  id: string | string[];
}

export default function ShareButton({ id }: IShare) {
  const [isShare, setIsShare] = useState(false);

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
      {isShare && (
        <ModalShare id={id} isShare={isShare} setIsShare={setIsShare} />
      )}
    </>
  );
}

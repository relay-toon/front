'use client';

import { useParams } from 'next/navigation';
export default function SaveButton() {
  const { id } = useParams();
  const awsLink = `https://relaytoon-prod.s3.ap-northeast-2.amazonaws.com/toons/${id}.png`;
  const onClick = () => {
    window.location.href = awsLink;
  };

  return (
    <button
      className=" custom-waguri-font h-[58px] w-[168px] rounded-[10px] bg-black text-white hover:bg-[#9B9B9B]"
      onClick={onClick}
    >
      저장하기
    </button>
  );
}

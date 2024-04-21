'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BackHeader() {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className="ml-3">
      <Image
        src="/svg/header-back.svg"
        alt="back"
        width={26}
        height={26}
        onClick={onClick}
      />
    </div>
  );
}

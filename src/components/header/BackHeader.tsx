'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface BackHeaderProps {
  text: string;
}
export default function BackHeader({ text }: BackHeaderProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className="ml-3 flex h-12 w-full items-center justify-between">
      <button onClick={onClick} style={{ flexShrink: 0 }}>
        <Image src="/svg/header-back.svg" alt="back" width={26} height={26} />
      </button>
      <span className="flex-grow text-center text-lg font-bold">{text}</span>
      <div style={{ width: 44, flexShrink: 0 }} />{' '}
    </div>
  );
}

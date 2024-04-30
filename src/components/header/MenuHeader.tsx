'use client';
import Image from 'next/image';
import Link from 'next/link';

interface IsOpen {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuHeader({ isOpen, setIsOpen }: IsOpen) {
  const onClick = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  return (
    <div className="relative flex w-[390px] flex-row px-5 py-[10px] ">
      <Link href="/">
        <Image src="/svg/logo.svg" alt="logo" width={75} height={28} priority />
      </Link>
      <Image
        src="/svg/header-menu.svg"
        alt="menu"
        width={26}
        height={26}
        className=" ml-auto cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
}

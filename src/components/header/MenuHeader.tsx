'use client';
import Image from 'next/image';
import Link from 'next/link';
import MyPageSideBar from '../MypageSidebar';
import { useState } from 'react';

interface IsLoggedIn {
  isLoggedIn: boolean;
}
export default function MenuHeader({ isLoggedIn }: IsLoggedIn) {
  const [isOpen, setIsOpen] = useState(false);

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
      {isOpen && (
        <div className="absolute right-0 top-0 h-[100vh] w-full bg-black opacity-50" />
      )}
      <MyPageSideBar
        setIsOpen={setIsOpen}
        isLoggedIn={isLoggedIn}
        isOpen={isOpen}
      />
    </div>
  );
}

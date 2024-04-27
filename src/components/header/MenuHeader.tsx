'use client';
import Image from 'next/image';
import Link from 'next/link';
import MyPageSideBar from '../MypageSidebar';
import { useState } from 'react';
import { useAuthStore } from '@/src/store/authStore';

export default function MenuHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const onClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative flex flex-row px-5 py-[10px]">
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

      <MyPageSideBar
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isLoggedIn={isLoggedIn ? true : false}
      />
    </div>
  );
}

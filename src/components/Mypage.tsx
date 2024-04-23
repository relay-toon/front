'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Mypage() {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className="relative mt-[47px] h-screen bg-[#F7F7F7]">
      <div className=" flex h-[48px] items-center justify-center bg-white">
        <div
          onClick={onClick}
          className="absolute left-[12px] size-[26px] cursor-pointer"
        >
          <Image src="/svg/header-back.svg" alt="back" width={26} height={26} />
        </div>
        <span className="text-[18px] font-bold">MY페이지</span>
      </div>

      <div className="custom-pretendard-font flex flex-col gap-[10px]">
        <div className="flex h-[128px] flex-col gap-6 bg-white px-5 py-[28px]">
          <span className="text-[14px] text-[#9B9B9B]">내정보</span>
          <Link href="/myaccount">
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-semibold">계정 정보</span>
              <div className="h-[18px] w-[16px]">
                <Image
                  src="/img/right.png"
                  width={16}
                  height={18}
                  alt="right"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex h-[183px] flex-col gap-6 bg-white px-5 py-[28px]">
          <span className="text-[14px] text-[#9B9B9B]">계정관리</span>
          <div className="flex flex-col gap-[20px] text-[18px] font-semibold">
            <span>로그이웃</span>
            <span>탈퇴하기</span>
          </div>
        </div>

        <div className="flex h-[183px] flex-col gap-6 bg-white px-5 py-[28px]">
          <span className="text-[14px] text-[#9B9B9B]">기타</span>
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-semibold">약관 및 정책</span>
            <div className="h-[18px] w-[16px]">
              <Image src="/img/right.png" width={16} height={18} alt="right" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-semibold">
              개인 정보 처리 방침
            </span>
            <div className="h-[18px] w-[16px]">
              <Image src="/img/right.png" width={16} height={18} alt="right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
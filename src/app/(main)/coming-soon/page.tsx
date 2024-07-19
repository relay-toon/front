'use client';
import LargeBtn from '@/src/components/LargeBtn';
import OnlyLogoHeader from '@/src/components/header/OnlyLogoHeader';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ComingSoonPage() {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className="h-screen">
      <OnlyLogoHeader />
      <div className="custom-waguri-font align-center mt-[141px] flex h-[41px] justify-center text-2xl">
        준비중
      </div>
      <div className="mt-[39px] flex justify-center">
        <Image
          src="/svg/coming-soon.svg"
          alt="coming-soon"
          width={56.59}
          height={56.57}
        />
      </div>
      <div className="mt-[39px] flex flex-col text-center">
        <span className="text-lg font-semibold leading-[32.4px] text-[#666666]">
          해당 서비스는
        </span>{' '}
        <span className="text-lg font-semibold leading-[32.4px] text-[#666666]">
          현재 준비 중인 서비스입니다.
        </span>
      </div>
      <div className="mb-8 mt-[194.43px] flex justify-center text-xl">
        <LargeBtn text="뒤로가기" onClick={onClick} active={true} />
      </div>
    </div>
  );
}

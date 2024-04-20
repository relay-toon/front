import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="mt-[97px] flex flex-col items-center justify-center">
      <Link href="/">
        <Image
          src="/img/login-image.png"
          alt="login"
          width={260}
          height={205}
        />
      </Link>
      <div className="mt-20 flex justify-center text-[#828282]">
        소셜로 시작하기
      </div>
      <div className="mt-7 flex flex-row">
        <a
          href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/kakao`}
        >
          <Image src="/svg/kakao.svg" alt="kakao" width={70} height={70} />
        </a>
        <a
          href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_KEY}&state=STATE_STRING&redirect_uri=${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/naver`}
        >
          <Image
            src="/svg/naver.svg"
            alt="naver"
            width={70}
            height={70}
            className=" ml-4"
          />
        </a>
        <a
          href={`https://accounts.google.com/o/oauth2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY}&redirect_uri=${process.env.BACKEND_URL}/auth/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`}
        >
          <Image
            src="/svg/google.svg"
            alt="google"
            width={70}
            height={70}
            className="ml-4 rounded-full bg-white"
          />
        </a>
      </div>
      <div className=" mb-[150px] mt-12 text-xs text-[#ABABAB]">
        로그인함으로써 릴레이툰의{' '}
        <span className="font-bold underline">서비스 이용약관</span>
        <div className="-mt-4 text-center">
          <br />및{' '}
          <span className="font-bold underline"> 개인정보 처리방침</span>에
          동의합니다.
        </div>
      </div>
    </div>
  );
}

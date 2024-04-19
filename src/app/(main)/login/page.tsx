import Image from 'next/image';
export default function LoginPage() {
  return (
    <div className="mt-[97px] flex flex-col items-center justify-center">
      <Image src="/img/login-image.png" alt="login" width={260} height={205} />
      <div className="mt-20 flex justify-center text-[#828282]">
        소셜로 시작하기
      </div>
      <div className="mt-7 flex flex-row">
        <Image src="/svg/kakao.svg" alt="kakao" width={70} height={70} />
        <Image
          src="/svg/naver.svg"
          alt="naver"
          width={70}
          height={70}
          className=" ml-4"
        />
        <Image
          src="/svg/google.svg"
          alt="google"
          width={70}
          height={70}
          className="ml-4 rounded-full bg-white"
        />
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

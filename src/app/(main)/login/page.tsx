import Image from 'next/image';
export default function LoginPage() {
  return (
    <div className="flex flex-col mt-[97px] w-[370px] justify-center items-center">
      <Image src="/img/login-image.png" alt="login" width={260} height={205} />
      <div className="flex justify-center text-[#828282] mt-20">
        소셜로 시작하기
      </div>
      <div className="flex flex-row mt-7">
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
          className="bg-white rounded-full ml-4"
        />
      </div>
      <div className=" mt-12 text-xs text-[#ABABAB] mb-[150px]">
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

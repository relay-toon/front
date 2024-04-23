import Link from 'next/link';

export default function ModalLogin() {
  const onLoginClick = () => {};
  return (
    <div className="custom-pretendard-font flex  h-[220.27px] w-[273px] flex-col items-center justify-center gap-[32px] rounded-[12px] bg-white">
      <span className="text-center text-xl font-medium">
        릴레이툰 시작 전 <br /> 로그인을 해주세요!
      </span>
      <Link href={'/login'}>
        <button
          className="h-[50px] w-[140px] rounded-[6px] bg-black text-lg font-bold text-white"
          onClick={onLoginClick}
        >
          로그인 하기
        </button>
      </Link>
    </div>
  );
}

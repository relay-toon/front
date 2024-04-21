import Link from "next/link";


export default function LoginModal() {
  return (
    <div className="w-[273px] h-[220.27px]  bg-white flex flex-col justify-center items-center rounded-[12px] gap-[32px] custom-waguri-font">
      <span className="text-center text-xl">
        릴레이툰 시작 전 <br /> 로그인을 해주세요!
      </span>
      <Link href={'/login'}>
        <button className="w-[140px] h-[50px] text-lg bg-black text-white rounded-[6px]">
          로그인 하기
        </button>
      </Link>
    </div>
  );
}

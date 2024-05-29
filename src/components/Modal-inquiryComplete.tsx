import Link from 'next/link';
export default function ModalInquiryComplete() {
  return (
    <div className="absolute left-[15.5%] top-1/3 flex h-[220.27px] w-[273px] flex-col items-center justify-center gap-[32px] rounded-[12px] bg-white">
      <div className="flex flex-col gap-[16px]">
        <span className="custom-waguri-font text-center text-xl">건의완료</span>
        <span className="cusom-pretendard-font text-[16px] font-medium text-[#9B9B9B]">
          건의해 주셔서 감사합니다!
        </span>
      </div>

      <Link href={'/'}>
        <button className="cusom-pretendard-font h-[50px] w-[140px] rounded-[6px] bg-black text-lg font-bold text-white">
          완료
        </button>
      </Link>
    </div>
  );
}

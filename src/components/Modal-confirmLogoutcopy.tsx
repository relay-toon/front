'use client';
export default function ModalConfirmLogout() {  
  const onClick = () => {};
  return (
    <div className="*:custom-pretendard-font flex h-[189px] w-[300px] flex-col items-center rounded-[12px] bg-white">
      <div className="flex h-[129px] w-[300px] flex-col items-center justify-center gap-[8px] border-b border-b-[#F2F2F2] font-medium">
        <span className="text-[20px] ">로그아웃 되었습니다.</span>
      </div>
      <div className="flex h-[60px] w-full cursor-pointer items-center justify-center text-[16px] font-bold">
        <div
          onClick={onClick}
          className="flex w-[150px] items-center justify-center"
        >
          <span>확인</span>
        </div>
      </div>
    </div>
  );
}

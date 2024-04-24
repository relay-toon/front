'use client';
export default function ModalLogout() {
  const onQuitClick = () => {};
  const onLogoutClick = () => {};
  return (
    <div className="*:custom-pretendard-font flex h-[189px] w-[300px] flex-col items-center rounded-[12px] bg-white ">
      <div className="flex h-[129px] w-[300px] items-center justify-center ">
        <span className="text-[20px] ">로그아웃 하시겠어요?</span>
      </div>
      <div className=" flex h-[60px] border-t border-t-[#F2F2F2] text-[16px] font-bold ">
        <div
          className="flex w-[150px] cursor-pointer items-center justify-center"
          onClick={onQuitClick}
        >
          <span>취소</span>
        </div>
        <div
          className="flex w-[150px] cursor-pointer items-center justify-center text-[#D84D45]"
          onClick={onLogoutClick}
        >
          <span>로그아웃</span>
        </div>
      </div>
    </div>
  );
}

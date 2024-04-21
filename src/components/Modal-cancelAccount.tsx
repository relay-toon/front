export default function ModalCancelAccount() {
  return (
    <div className="*:custom-pretendard-font flex h-[189px] w-[300px] flex-col items-center rounded-[12px] bg-white">
      <div className="flex h-[129px] w-[300px] flex-col items-center justify-center gap-[8px] font-medium">
        <span className="text-[20px] ">탈퇴를 진행 하시겠어요?</span>
        <span className="text-[16px] text-[#9E9E9E] ">
          모든 정보는 복구가 불가능합니다.
        </span>
      </div>
      <div className="border-t-F2F2F2 flex h-[60px] border-t border-t-[#F2F2F2] text-[16px] font-bold ">
        <div className="flex w-[150px] cursor-pointer items-center justify-center">
          <span>취소</span>
        </div>
        <div className="flex w-[150px] cursor-pointer items-center justify-center text-[#D84D45]">
          <span>탈퇴하기</span>
        </div>
      </div>
    </div>
  );
}

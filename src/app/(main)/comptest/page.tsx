import { SetStateAction } from 'react';

interface ModalShare {
  isShare: boolean;
  setIsShare: React.Dispatch<SetStateAction<boolean>>;
}

export default function ModalShare({ isShare, setIsShare }: ModalShare) {
  let currentUrl = window.document.location.href;

  const onClick = () => {
    let t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = currentUrl;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);

    alert('클립보드에 복사되었습니다');
    setIsShare(false)
  };

  return (
    <div className="absolute left-[12%] top-1/3 z-40 flex h-[280px] w-[296px] flex-col items-center justify-center gap-[34px] rounded-[12px] bg-white px-5 py-3">
      <div className="custom-waguri-font flex flex-col items-center gap-2">
        <span className="text-center text-xl">그림 공유하기</span>
      </div>
      <div className="">
        <span className="mt-[2px] inline-block h-[54px] max-w-[216px] overflow-y-hidden whitespace-nowrap rounded-lg border border-[#DEDEDE] p-4 scrollbar-hide placeholder:border placeholder:border-[#DEDEDE] placeholder:text-[16px] focus:ring-1 focus:ring-black">
          {currentUrl}
        </span>
      </div>

      <button
        onClick={onClick}
        className="h-[50px] w-[140px] rounded-[6px] bg-black text-lg font-bold text-white"
      >
        복사
      </button>
    </div>
  );
}

import { SetStateAction } from 'react';
import { useGetToonInfo } from '../hooks/useGetToonInfo';
import LoadingSpinner from './LoadingSpinner';

interface ModalShare {
  id: string | string[];
  setIsShare: React.Dispatch<SetStateAction<boolean>>;
}

export default function ModalShare({ id, setIsShare }: ModalShare) {
  const { data: toonData, isLoading } = useGetToonInfo(id);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const currentUrl =
    toonData?.headCount === toonData?.participants?.length
      ? `https://relaytoon.site/item/${toonData?.id}`
      : `https://relaytoon.site/prevPicture/${id}?count=${toonData?.participants?.length + 1}`;

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };

  const onBackgroundClick = () => {
    setIsShare(false);
  };

  return (
    <>
      <div
        onClick={onBackgroundClick}
        className="margin-auto fixed top-0 z-10 h-[100vh] w-[390px] overflow-hidden"
        style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
      ></div>
      <div className="absolute left-[34%] top-1/3 z-40 flex h-[280px] w-[296px] flex-col items-center justify-center gap-[34px] rounded-[12px] bg-white px-5 py-3">
        <div className="custom-waguri-font flex flex-col items-center gap-2">
          <span className="text-center text-xl">그림 공유하기</span>
        </div>
        <div className="">
          <span className="mt-[2px] inline-block h-[54px] max-w-[216px] overflow-y-hidden whitespace-nowrap rounded-lg border border-[#DEDEDE] p-4 scrollbar-hide placeholder:border placeholder:border-[#DEDEDE] placeholder:text-[16px] focus:ring-1 focus:ring-black">
            {currentUrl}
          </span>
        </div>

        <button
          onClick={() => handleCopyClipBoard(currentUrl)}
          className="h-[50px] w-[140px] rounded-[6px] bg-black text-lg font-bold text-white"
        >
          복사
        </button>
      </div>
    </>
  );
}

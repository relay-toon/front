'use client';
import DrawingOrder from '@/src/components/DrawingOrder';
import Image from 'next/image';
import SaveButton from '@/src/components/SaveButton';
import ShareButton from '@/src/components/ShareButton';
import MenuHeader from '@/src/components/header/MenuHeader';
import { useState } from 'react';
import MyPageSideBar from '@/src/components/MypageSidebar';
import { useParams, useSearchParams } from 'next/navigation';
import { useGetToonInfo } from '@/src/hooks/useGetToonInfo';

export default function FinishedDrawing() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(false);
  };
  const { id } = useParams();
  const { data: toon } = useGetToonInfo(id);

  const searchParams = useSearchParams();
  const count = searchParams.get('count');

  // 다음 그리는 사람이 전달받을 url
  let nextURL = `/prevPicture/${id}?count=${parseInt(count!) + 1 + ''}`;
  console.log('다음 그리는 사람이 받을 URL : ', nextURL);
  return (
    <div>
      <MenuHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="custom-waguri-font mt-4  flex justify-center text-2xl">
        {count}번째&nbsp;<span className="text-[#9B9B9B]">그림 완성!</span>
      </div>
      <div className="mt-3 text-lg">
        <div className="flex justify-center">다음 순서로 그릴 멤버들에게</div>
        <div className="flex justify-center">
          <span className="font-bold">링크를 공유</span>
          해주세요!
        </div>
      </div>
      <div className="mt-8">
        <DrawingOrder
          count={count}
          width={108}
          height={33}
          positionStyle={{ top: '44px', left: '64px', position: 'relative' }}
        />
      </div>
      <div className="flex justify-center">
        <img
          src={toon?.image}
          className="h-[364px] w-[280px] rounded-[6.4px] border-2 border-[#E0FF68]"
        />
      </div>
      <div className="mb-[116px] mt-9 flex flex-row justify-center gap-[14px]">
        <SaveButton />
        <ShareButton />
      </div>
      {isOpen && (
        <div
          className={`fixed top-0 z-10 h-[100vh] w-[390px] bg-gray-400 transition-all duration-200 ease-in-out`}
          style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
          onClick={onClick}
        >
          <MyPageSideBar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      )}
    </div>
  );
}

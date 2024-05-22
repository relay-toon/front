'use client';
import BackHeader from '@/src/components/header/BackHeader';
import { useGetMyCreatedToon } from '@/src/hooks/useGetMyCreatedToon';
import { useGetMyParticipatedToon } from '@/src/hooks/useGetMyParticipatedToon';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function MyGallery() {
  const [tab, setTab] = useState<'만든 그림' | '참여 그림'>('만든 그림');
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [completed, setCompleted] = useState(false);
  const maxButtons = 5;
  const halfMaxButtons = Math.floor(maxButtons / 2);

  let startPage, endPage;

  if (pageNumber <= halfMaxButtons) {
    startPage = 1;
    endPage = Math.min(totalPages, maxButtons);
  } else if (pageNumber + halfMaxButtons >= totalPages) {
    startPage = Math.max(1, totalPages - maxButtons + 1);
    endPage = totalPages;
  } else {
    startPage = pageNumber - halfMaxButtons;
    endPage = pageNumber + halfMaxButtons;
  }
  const { data: myCreatedToon, refetch: refetchCreated } = useGetMyCreatedToon(
    pageNumber,
    completed,
  );
  const { data: myParticipatedToon, refetch: refetchParticipated } =
    useGetMyParticipatedToon(pageNumber, completed);
  const handleTabChange = (newTab: '만든 그림' | '참여 그림') => {
    if (newTab !== tab) {
      setTab(newTab);
      setPageNumber(1);
      setCompleted(newTab === '참여 그림');
    }
  };
  const handlePageChange = (newPage: number) => {
    if (newPage !== pageNumber) {
      setPageNumber(newPage);
    }
    window.scrollTo({
      top: window.scrollY,
      behavior: 'auto',
    });
  };
  useEffect(() => {
    if (pageNumber === 1) {
      const newTotalPages =
        (tab === '만든 그림'
          ? myCreatedToon?.totalPage
          : myParticipatedToon?.totalPage) || 1;
      setTotalPages(newTotalPages);
    }
  }, [tab, myCreatedToon, myParticipatedToon]);

  useEffect(() => {
    if (tab === '만든 그림') {
      refetchCreated();
    } else {
      refetchParticipated();
    }
  }, [pageNumber, tab]);

  const createdToons = myCreatedToon?.toons || [];
  const participatedToons = myParticipatedToon?.toons || [];
  return (
    <div className="min-h-[754px]">
      <div className="flex">
        <BackHeader text="그림갤러리" />
      </div>
      <div className="relative mt-[64px] flex items-center justify-center text-base font-bold">
        <div
          onClick={() => handleTabChange('만든 그림')}
          className={`relative mx-[60px] mb-1 cursor-pointer ${
            tab === '만든 그림' ? 'text-[#595959]' : 'text-[#9E9E9E]'
          }`}
        >
          만든 그림
          {tab === '만든 그림' && (
            <span
              className="absolute -bottom-1 left-1/2 block h-[3px] bg-black"
              style={{ width: 78, transform: 'translateX(-50%)' }}
            ></span>
          )}
        </div>
        <div
          onClick={() => handleTabChange('참여 그림')}
          className={`relative mx-[60px] mb-1 cursor-pointer ${
            tab === '참여 그림' ? 'text-[#595959]' : 'text-[#9E9E9E]'
          }`}
        >
          참여 그림
          {tab === '참여 그림' && (
            <span
              className="absolute -bottom-1 left-1/2 block h-[3px] bg-black"
              style={{ width: 78, transform: 'translateX(-50%)' }}
            ></span>
          )}
        </div>
      </div>
      <hr className="border-1 border-solid border-[#C7C7C7]" />
      {tab === '만든 그림' ? (
        <>
          <div className="ml-5 mt-[29px] font-bold">
            <span>총 {createdToons.length}장</span>
          </div>
          <div className="flex flex-col items-center">
            {createdToons.map((toon: any, index: number) => {
              const date = new Date(toon.createdAt);
              const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

              return (
                <div key={index}>
                  {toon.image ? (
                    <Link href={`/item/${toon.id}`} key={index}>
                      <img
                        src={toon.image}
                        alt={toon.title}
                        width={350}
                        className="mt-5 rounded-xl"
                        style={{ height: 204 }}
                      />
                    </Link>
                  ) : (
                    <div className="mt-5 h-[204px] w-[350px] rounded-xl bg-white"></div>
                  )}
                  <div className="align-center mt-4 flex flex-row justify-between">
                    <div className="text-base font-semibold">{toon.title}</div>
                    <div className="text-base font-semibold text-[#9E9E9E]">
                      {formattedDate}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <div className="ml-5 mt-[29px] font-bold ">
            총 {participatedToons.length}장
          </div>
          <div className="flex flex-col items-center">
            {participatedToons.map((toon: any, index: number) => {
              const date = new Date(toon.createdAt);
              const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

              return (
                <Link href={`/item/${toon.id}`} key={index}>
                  <div key={index}>
                    {toon.image ? (
                      <img
                        src={toon.image}
                        alt={toon.title}
                        width={350}
                        height={204}
                        className="mt-5 rounded-xl"
                      />
                    ) : (
                      <div className="mt-5 h-[204px] w-[350px] rounded-xl bg-white"></div>
                    )}
                    <div className="align-center mt-4 flex flex-row justify-between">
                      <div className="text-base font-semibold">
                        {toon.title}
                      </div>
                      <div className="text-base font-semibold text-[#9E9E9E]">
                        {formattedDate}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-5 flex justify-center">
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <button
            key={startPage + i}
            onClick={() => handlePageChange(startPage + i)}
            className={`mx-1 p-2 text-lg ${pageNumber === startPage + i ? 'font-bold' : 'font-normal'}`}
          >
            {startPage + i}
          </button>
        ))}
      </div>
    </div>
  );
}

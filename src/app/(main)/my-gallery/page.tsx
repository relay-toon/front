'use client';
import BackHeader from '@/src/components/header/BackHeader';
import { useGetMyCreatedToon } from '@/src/hooks/useGetMyCreatedToon';
import { useGetMyParticipatedToon } from '@/src/hooks/useGetMyParticipatedToon';
import Link from 'next/link';
import { useState } from 'react';

export default function MyGallery() {
  const [tab, setTab] = useState<'만든 그림' | '참여 그림'>('만든 그림');
  const { data: myCreatedToon = [] } = useGetMyCreatedToon();
  const { data: myParticipatedToon = [] } = useGetMyParticipatedToon();

  return (
    <div>
      <div className="flex">
        <BackHeader text="그림갤러리" />
      </div>
      <div className="relative mt-[64px] flex items-center justify-center text-base font-bold">
        <div
          onClick={() => setTab('만든 그림')}
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
          onClick={() => setTab('참여 그림')}
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
            <span>총 {myCreatedToon.length}장</span>
          </div>
          <div className="flex flex-col items-center">
            {myCreatedToon.map((toon: any, index: number) => {
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
                      <div
                        className="mt-5 rounded-xl bg-white"
                        style={{ width: '350px', height: '204px' }}
                      ></div>
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
        </>
      ) : (
        <>
          <div className="ml-5 mt-[29px] font-bold">
            총 {myParticipatedToon.length}장
          </div>
          <div className="flex flex-col items-center">
            {myParticipatedToon.map((toon: any, index: number) => {
              const date = new Date(toon.createdAt);
              const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

              return (
                <Link href={`/item/${toon.id}`} key={index}>
                  <div key={index}>
                    <img
                      src={toon.image ? toon.image : '/img/empty.webp'}
                      alt={toon.title}
                      width={350}
                      height={204}
                      className="mt-5 rounded-xl"
                    />
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
        </>
      )}
    </div>
  );
}

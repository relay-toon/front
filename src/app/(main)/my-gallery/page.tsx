'use client';
import BackHeader from '@/src/components/header/BackHeader';
import { useState } from 'react';

export default function MyGallery() {
  const [tab, setTab] = useState<'만든 그림' | '참여 그림'>('만든 그림');
  let images = [
    '/img/main-image.png ',
    '/img/draw-example.png',
    '/img/example-input.png',
  ];
  const onlyAlt = (path: string): string => {
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    return fileName.substring(0, fileName.lastIndexOf('.'));
  };
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
          <div className="ml-5 mt-[29px] font-bold">총 20장</div>
          <div className="flex flex-col items-center">
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${index}`}
                  width={350}
                  height={204}
                  className=""
                />
                <span className="mt-[16px] flex">{onlyAlt(image)}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="ml-5 mt-[29px] font-bold">총 20장</div>
          <div className="flex flex-col items-center">
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${index}`}
                  width={350}
                  height={204}
                  className="bg-black"
                />
                <span className="mt-[16px] flex">{onlyAlt(image)}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

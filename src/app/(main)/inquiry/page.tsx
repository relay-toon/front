'use client';
import LargeBtn from '@/src/components/LargeBtn';
import BackHeader from '@/src/components/header/BackHeader';
import { ChangeEvent, useState } from 'react';

export default function Inquiry() {
  const [isActive, setIsActive] = useState(false);
  const [inquiry, setInquiry] = useState('');
  const onInquiryTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInquiry(e.target.value);
  };

  return (
    <div>
      <BackHeader text="건의하기" />
      <div className="*:custom-pretendard-font relative flex h-screen flex-col items-center bg-[#F7F7F7] px-[20px]">
        <div className="flex h-[48px] items-center justify-center bg-[#F7F7F7]"></div>

        <div className="mt-[35px] flex h-[90px] flex-col gap-[16px]">
          <div>
            <span className="text-[16px] font-bold">문의유형</span>
          </div>
          <div className="h-[50px] w-[350px] rounded-[8px] bg-white p-4 text-[16px] font-semibold">
            <span>건의하기</span>
          </div>
        </div>

        <div className="mt-[28px] flex flex-col gap-[16px]">
          <div>
            <span className="text-[16px] font-bold">문의내용</span>
          </div>
          <textarea
            value={inquiry}
            onChange={onInquiryTextChange}
            placeholder="릴레이툰 팀에게 건의할 사항을 입력해주세요"
            className="h-[230px] w-[349px] rounded-[12px] p-4 placeholder:text-[15px] placeholder:font-medium"
          />
        </div>
        <div className="mt-[150px]">
          <LargeBtn
            text="등록하기"
            active={inquiry.length ? !isActive : isActive}
          />
        </div>
      </div>
    </div>
  );
}

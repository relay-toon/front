import LargeButton from '@/src/components/LargeButton';
import OnlyLogoHeader from '@/src/components/header/OnlyLogoHeader';
import Image from 'next/image';

export default function WaitingPage() {
  return (
    <div>
      <OnlyLogoHeader />
      <div className="custom-waguri-font mt-32 flex justify-center text-2xl">
        현재 누가 그리고 있어요!
      </div>
      <div className="mt-[39px] flex flex-row justify-center">
        <Image
          src="/svg/gray-person.svg"
          alt="gray-person"
          width={43.14}
          height={52}
        />
        <Image
          src="/svg/gray-person.svg"
          alt="gray-person"
          width={43.14}
          height={52}
          className="ml-6"
        />
        <Image
          src="/svg/green-person.svg"
          alt="green-person"
          width={53.62}
          height={84}
          className="ml-6"
        />
      </div>
      <div className="mt-[39px] flex flex-col text-center text-lg font-bold">
        <span className="text-[#666666]">앞선 주자가</span>
        <br />
        <span className="-mt-4 font-bold">그림을 완성할 때까지</span>
        <br />
        <span className="-mt-4 text-[#666666]">조금만 기다려주세요!</span>
      </div>
      <Image
        src="/svg/under-arrow.svg"
        alt="under-arrow"
        width={29}
        height={38}
        className="mx-auto mt-[89px]"
      />
      <div className="mb-[108px] mt-[13px] flex justify-center px-5 py-2">
        <LargeButton buttonText="새로 고침" />
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function MyPageNonLoginSideBar() {
  return (
    <div className="custom-pretendard-font relative flex h-screen w-[310px] flex-col items-center bg-[#F7F7F7]">
      <div className="mt-[58px] flex h-[48px] items-center justify-center text-lg ">
        <div className="absolute left-[25px] flex h-[26px] w-[26px] items-center justify-center">
          <Image src="/img/close.png" alt="close" width={26} height={26} />
        </div>
        <div className="flex justify-center text-center font-bold">
          <span>MY페이지</span>
        </div>
      </div>

      <Link href="/login">
        <div className="mt-[19px] flex h-[82px] w-[266px] items-center justify-between rounded-[12px] bg-white px-[20px]">
          <span className="text-[20px] font-bold">로그인하기</span>
        </div>
      </Link>
      <div className="mt-[28px] flex h-[254px] w-[266px] flex-col items-center justify-center rounded-[12px] bg-white">
        <Link href="/gallery">
          <div className="border-b-[1.5px flex h-[60px] w-[218px] items-center justify-start border-b-[1.5px] border-b-[#F7F7F7]">
            <div className="flex items-center justify-center">
              <Image
                src="/img/pictureGaller.png"
                alt="picture-gallery"
                width={28}
                height={28}
              />
            </div>
            <span className="pl-[2px] text-[16px] font-semibold">
              그림 갤러리
            </span>
          </div>
        </Link>

        <Link href="/store">
          <div className="flex h-[60px] w-[218px] items-center justify-start border-b-[1.5px] border-b-[#F7F7F7]">
            <div className="flex items-center justify-center">
              <Image
                src="/img/store.png"
                alt="picture-gallery"
                width={28}
                height={28}
              />
            </div>
            <span className="pl-[2px] text-[16px] font-semibold">스토어</span>
          </div>
        </Link>
        <Link href="/inquiry">
          <div className="flex h-[60px] w-[218px] items-center justify-start border-b-[1.5px] border-b-[#F7F7F7]">
            <div className="flex items-center justify-center">
              <Image
                src="/img/inquiry.png"
                alt="picture-gallery"
                width={28}
                height={28}
              />
            </div>
            <span className="pl-[2px] text-[16px] font-semibold">문의하기</span>
          </div>
        </Link>
        <Link href="/suggest">
          <div className="flex h-[60px] w-[218px] items-center justify-start">
            <div className="flex items-center justify-center">
              <Image
                src="/img/suggest.png"
                alt="picture-gallery"
                width={28}
                height={28}
              />
            </div>
            <span className="pl-[2px] text-[16px] font-semibold">건의하기</span>
          </div>
        </Link>
      </div>
      <div className="mt-[56px] flex h-[141px] flex-col gap-[32px] *:font-semibold">
        <Link href="/info">
          <button className="flex h-[48px] w-[168px] items-center justify-center rounded-[8px] bg-[#EAEAEA]">
            공지사항
          </button>
        </Link>
        <Link href="setting">
          <button className="flex h-[48px] w-[168px] items-center justify-center rounded-[8px] bg-[#EAEAEA]">
            설정
          </button>
        </Link>
      </div>
    </div>
  );
}

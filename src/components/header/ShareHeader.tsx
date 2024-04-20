import Image from 'next/image';

export default function ShareHeader() {
  return (
    <div className="flex flex-row px-5 py-[10px]">
      <Image src="/svg/header-share.svg" alt="share" width={26} height={26} />
      <Image
        src="/svg/header-menu.svg"
        alt="menu"
        width={26}
        height={26}
        className="ml-auto"
      />
    </div>
  );
}

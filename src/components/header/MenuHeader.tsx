import Image from 'next/image';
import Link from 'next/link';
export default function MenuHeader() {
  return (
    <div className="flex flex-row px-5 py-[10px]">
      <Link href="/">
        <Image src="/svg/logo.svg" alt="logo" width={75} height={28} priority />
      </Link>
      <Image
        src="/svg/header-menu.svg"
        alt="menu"
        width={26}
        height={26}
        className=" ml-auto"
      />
    </div>
  );
}

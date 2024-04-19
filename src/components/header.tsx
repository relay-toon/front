import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
  return (
    <div className="flex flex-row mt-2 p-5">
      <Link href="/">
        <Image src="/svg/logo.svg" alt="logo" width={75} height={27} priority />
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

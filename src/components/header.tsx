import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
  return (
    <div className="mt-2 flex flex-row p-5">
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

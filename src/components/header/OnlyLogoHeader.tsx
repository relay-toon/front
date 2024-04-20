import Image from 'next/image';
import Link from 'next/link';
export default function OnlyLogoHeader() {
  return (
    <div className="flex px-5 py-[10px]">
      <Link href={'/'}>
        <Image src="/svg/logo.svg" alt="logo" width={75} height={28} priority />
      </Link>
    </div>
  );
}

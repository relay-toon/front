import Image from 'next/image';

export default function OnlyLogoHeader() {
  return (
    <div className="flex px-5 py-[10px]">
      <Image src="/svg/logo.svg" alt="logo" width={75} height={28} priority />
    </div>
  );
}

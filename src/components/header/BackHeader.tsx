import Image from 'next/image';

export default function BackHeader() {
  return (
    <div className="ml-3">
      <Image src="/svg/header-back.svg" alt="back" width={26} height={26} />
    </div>
  );
}

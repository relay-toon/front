import Image from 'next/image';
export default function Header() {
  return (
    <div className="flex flex-row mt-2">
      <Image
        src="/svg/logo.svg"
        alt="logo"
        width={75}
        height={27}
        className=" mr-auto"
      />
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

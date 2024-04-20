import Image from 'next/image';

export default function LoadingSpinner() {
  return (
    <Image
      src="/svg/loading.svg"
      alt="loading"
      width={82}
      height={79}
      className=" animate-spin-2s"
    />
  );
}

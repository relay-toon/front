import Image from 'next/image';

export default function LoadingSpinner() {
  return (
    <div className="flex h-[754px] w-full">
      <Image
        src="/svg/loading.svg"
        alt="loading"
        width={82}
        height={79}
        className="ml-auto mr-auto flex h-full animate-spin-2s items-center"
      />
    </div>
  );
}

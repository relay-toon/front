import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="from-primary to-secondary flex flex-col items-center justify-center bg-gradient-to-r text-black">
      <div className="animate-fadeIn text-center">
        <h1 className="animate-pulse text-9xl font-extrabold tracking-widest">
          404
        </h1>
        <p className="mt-4 text-2xl">페이지를 찾을 수 없습니다.</p>
      </div>
      <div className="mt-4 flex">
        <Link
          href="/"
          className="text-primary transform rounded-md bg-black px-8 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:scale-110"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

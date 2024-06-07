import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SetStateAction } from 'react';

interface IModalConfrim {
  setComfirmLoggedIn: React.Dispatch<SetStateAction<boolean>>;
  params: {
    id: string;
  };
  count: string;
  path: string;
}

export default function ModlaConfrimLogin({
  setComfirmLoggedIn,
  params,
  count,
  path,
}: IModalConfrim) {
  const router = useRouter();

  const onBackgroundClick = () => {
    setComfirmLoggedIn(false);
  };
  const onDrawingClick = () => {
    router.push(`/drawing/${params.id}?count=${count}`);
  };
  const onLoginClick = () => {
    router.push('/login');
    localStorage.setItem('prevURL', path.split('/')[1]);
    localStorage.setItem('params', params.id);
    localStorage.setItem('count', count);
  };
  return (
    <>
      <div
        onClick={onBackgroundClick}
        className="fixed top-0 z-50 h-[100vh] w-[390px] overflow-hidden"
        style={{ backgroundColor: 'rgba(23, 23, 23, 0.5)' }}
      />
      <div className="custom-pretendard-font absolute left-[15%] top-[30%] z-50 flex  h-[220.27px] w-[273px] flex-col items-center justify-center gap-[32px] rounded-[12px] bg-white">
        <span className="text-center text-xl font-medium">
          릴레이툰 시작 전 <br /> 로그인을 해주세요!
        </span>
        <div className="flex gap-4">
          <button
            onClick={onLoginClick}
            className="text-md h-[50px] w-[100px] rounded-[6px] bg-black font-bold text-white"
          >
            로그인 하기
          </button>

          <button
            className="text-md h-[50px] w-[100px] rounded-[6px] bg-black font-bold text-white"
            onClick={onDrawingClick}
          >
            그냥 그리기
          </button>
        </div>
      </div>
    </>
  );
}

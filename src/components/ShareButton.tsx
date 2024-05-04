import Link from 'next/link';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useGetToonInfo } from '../hooks/useGetToonInfo';

export default function ShareButton() {
  const email = 'jenple9709@gmail.com';
  const body = encodeURIComponent('문의 내용을 적어주세요!');

  //* 완성을 누르면 -> finished-drawing/${id}/count+1 된 url받고 -> 이걸 다음 사용자에게 전달하고 ->
  const params = useParams<{ id: string }>();
  const { data: myCreatedToon = [] } = useGetToonInfo(params.id);

  const mailto = `mailto:${email}?body=${body}`;



  return (

      <button className="custom-waguri-font h-[58px] w-[168px] rounded-[10px] bg-share-button text-black hover:bg-[#C4DF58]">
        <a href={mailto}>공유하기</a>
      </button>
  );
}

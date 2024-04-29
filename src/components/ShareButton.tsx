export default function ShareButton() {
  const email = 'jenple9709@gmail.com';
  const body = encodeURIComponent('문의 내용을 적어주세요!');

  const mailto = `mailto:${email}?body=${body}`;
  return (
    <button className="custom-waguri-font h-[58px] w-[168px] rounded-[10px] bg-share-button text-black hover:bg-[#C4DF58]">
      <a href={mailto}>공유하기</a>
    </button>
  );
}

interface BtnText {
  text: string;
  active: boolean;
  onClick?: () => void;
}
export default function LargeBtn({ text, active, onClick }: BtnText) {
  return (
    <button
      className={`h-[58px] w-[350px] ${active ? 'bg-[#E0FF68]' : 'bg-[#D9D9D9]'} custom-waguri-font flex items-center justify-center rounded-md text-center text-[20px] text-black ${active ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

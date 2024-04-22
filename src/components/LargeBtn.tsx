interface BtnText {
  text: string;
  active: boolean;
}
export default function LargeBtn({ text, active }: BtnText) {
  return (
    <button
      className={`custom-waguri-font h-[64px] w-[332px] ${active ? 'bg-[#E0FF68]' : 'bg-[#D9D9D9]'} flex items-center justify-center rounded-md text-center text-[20px] text-black ${active ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {text}
    </button>
  );
}

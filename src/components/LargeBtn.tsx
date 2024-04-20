interface BtnText {
  text: string;
  active: boolean;
}
export default function LargeBtn({ text, active }: BtnText) {
  return (
    <button
      className={`w-[332px] h-[64px] ${active ? 'bg-[#E0FF68]' : 'bg-[#D9D9D9]'} text-black text-[20px] rounded-md text-center flex justify-center items-center ${active ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {text}
    </button>
  );
}

interface BtnText {
  text: string;
  active: boolean;
}
export default function MediumBtn({ text, active }: BtnText) {
  return (
    <button
      className={`w-[168px] h-[58px] ${active ? 'bg-[#E0FF68]' : 'bg-[#D9D9D9]'} text-black text-[20px] rounded-md text-center flex justify-center items-center `}
    >
      {text}
    </button>
  );
}

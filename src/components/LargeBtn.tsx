interface BtnText {
  text: string;
  active: boolean;
  onClick?: () => void;
}
export default function LargeBtn({ text, active, onClick }: BtnText) {
  return (
    <button
      className={`h-[58px] w-[350px] ${active ? 'cursor-pointer bg-[#E0FF68]' : 'cursor-default bg-[#D9D9D9]'} custom-waguri-font flex items-center justify-center rounded-md text-center text-[20px] text-black`}
      onClick={onClick}
      disabled={!active}
    >
      {text}
    </button>
  );
}

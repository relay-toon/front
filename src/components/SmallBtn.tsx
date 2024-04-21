interface BtnText {
  text: string;
  counting: boolean;
}
export default function SmallBtn({ text, counting }: BtnText) {
  return (
    <button
      className={`w-[70px] h-[36px] ${
        counting ? 'bg-black text-[#E0FF68]' : 'bg-[#E0FF68] text-black'
      }  text-[16px] rounded-md text-center flex justify-center items-center `}
    >
      {text}
    </button>
  );
}

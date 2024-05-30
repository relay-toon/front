interface BtnText {
  text: string;
}
export default function ModalBtn({ text }: BtnText) {
  return (
    <button className="flex h-[50px] w-[140px] items-center justify-center rounded-md bg-black text-center text-lg font-bold text-white ">
      {text}
    </button>
  );
}

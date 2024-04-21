interface BtnText {
  text: string;
}
export default function ModalBtn({ text }: BtnText) {
  return (
    <button className="w-[140px] h-[50px] bg-black text-white text-lg font-bold rounded-md text-center flex justify-center items-center ">
      {text}
    </button>
  );
}

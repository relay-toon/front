interface LargeButtonProps {
  buttonText: string;
}
export default function LargeButton({ buttonText }: LargeButtonProps) {
  return (
    <button className="custom-waguri-font h-[58px] w-[350px] rounded-[10px] bg-large-button  text-black hover:bg-[#E0FF68]">
      {buttonText}
    </button>
  );
}

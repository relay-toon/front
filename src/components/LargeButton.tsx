interface LargeButtonProps {
  buttonText: string;
  onClick?: () => void;
}
export default function LargeButton({ buttonText, onClick }: LargeButtonProps) {
  return (
    <button
      className="custom-waguri-font h-[58px] w-[350px] rounded-[10px] bg-large-button py-[14px] text-xl text-black hover:bg-[#E0FF68]"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

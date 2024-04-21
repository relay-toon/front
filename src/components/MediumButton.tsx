interface MediumButtonProps {
  buttonText: string;
  onClick?: () => void;
}
export default function CompleteButton({
  buttonText,
  onClick,
}: MediumButtonProps) {
  return (
    <button
      className="h-[50px] w-[140px] rounded-[6px] bg-black text-white"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

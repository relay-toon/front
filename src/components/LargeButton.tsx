import '@/src/app/styles/globals.css';

interface LargeButtonProps {
  buttonText: string;
}
export default function LargeButton({ buttonText }: LargeButtonProps) {
  return (
    <button className="w-[350px] h-[58px] rounded-[10px] bg-large-button text-black custom-waguri-font hover:bg-[#C4DF58]">
      {buttonText}
    </button>
  );
}

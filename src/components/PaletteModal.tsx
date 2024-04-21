'use client';

interface PaletteModalProps {
  onClose: () => void;
  onColorSelect: (color: string) => void;
}
export default function PaletteModal({
  onClose,
  onColorSelect,
}: PaletteModalProps) {
  return (
    <div className="absolute -bottom-[44px] right-[350px] z-10 flex h-[434px] w-[390px] flex-col rounded-t-3xl bg-white">
      <div className="mt-[32px] flex h-[39px] flex-row">
        <div className="ml-[37px] flex items-center text-xl font-bold">
          컬러 팔레트
        </div>
        <button
          className="custom-waguri-font ml-[124px] flex h-[39px] w-[90px] items-center justify-center gap-1 rounded-md bg-[#E0FF68]  py-[14px] text-center text-lg text-black"
          onClick={onClose}
        >
          확인
        </button>
      </div>
      <div className="ml-auto mr-auto mt-[60px] flex flex-col">
        <div>
          <button
            className="h-10 w-10 rounded-full bg-black"
            onClick={() => onColorSelect('#000000')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#5D5D5D]"
            onClick={() => onColorSelect('#5D5D5D')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#A1A1A1]"
            onClick={() => onColorSelect('#A1A1A1')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#D4D4D4]"
            onClick={() => onColorSelect('#D4D4D4')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full border-[1px] border-black bg-white"
            onClick={() => onColorSelect('#FFFFFF')}
          ></button>
        </div>
        <div className="ml-auto mr-auto mt-[28px] flex">
          <button
            className="h-10 w-10 rounded-full bg-[#6F574C]"
            onClick={() => onColorSelect('#6F574C')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#DC6C44]"
            onClick={() => onColorSelect('#DC6C44')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#E5A04D]"
            onClick={() => onColorSelect('#E5A04D')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#EEC45C]"
            onClick={() => onColorSelect('#EEC45C')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#F9EB76]"
            onClick={() => onColorSelect('#F9EB76')}
          ></button>
        </div>
        <div className="ml-auto mr-auto mt-[28px] flex">
          <button
            className="h-10 w-10 rounded-full bg-[#90B05F]"
            onClick={() => onColorSelect('#90B05F')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#6C9B5A]"
            onClick={() => onColorSelect('#6C9B5A')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#589288]"
            onClick={() => onColorSelect('#589288')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#6FB8CE]"
            onClick={() => onColorSelect('#6FB8CE')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#63A6EB]"
            onClick={() => onColorSelect('#63A6EB')}
          ></button>
        </div>
        <div className="ml-auto mr-auto mt-[28px] flex">
          <button
            className="h-10 w-10 rounded-full bg-[#3F4B9F]"
            onClick={() => onColorSelect('#3F4B9F')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#5B41AA]"
            onClick={() => onColorSelect('#5B41AA')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#843CA4]"
            onClick={() => onColorSelect('#843CA4')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#C54665]"
            onClick={() => onColorSelect('#C54665')}
          ></button>
          <button
            className="ml-5 h-10 w-10 rounded-full bg-[#D15C49]"
            onClick={() => onColorSelect('#D15C49')}
          ></button>
        </div>
      </div>
    </div>
  );
}

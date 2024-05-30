interface PaletteModalProps {
  onClose: () => void;
  onColorSelect: (color: string) => void;
}
export default function PaletteModal({
  onClose,
  onColorSelect,
}: PaletteModalProps) {
  return (
    <div
      className="fixed inset-0 z-40 flex h-screen w-screen  justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="absolute -bottom-[44px] right-[350px] z-50 flex h-[434px] w-[390px] flex-col rounded-t-3xl bg-white"
        style={{ bottom: '0%', right: '50%', transform: 'translateX(50%)' }}
        onClick={(e) => e.stopPropagation()}
      >
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
              className="h-10 w-10 rounded-full bg-black focus:ring-4 focus:ring-[#000000] focus:ring-offset-2"
              onClick={() => onColorSelect('#000000')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full bg-[#5D5D5D] focus:ring-4 focus:ring-[#5D5D5D] focus:ring-offset-2"
              onClick={() => onColorSelect('#5D5D5D')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full bg-[#A1A1A1] focus:ring-4 focus:ring-[#A1A1A1] focus:ring-offset-2"
              onClick={() => onColorSelect('#A1A1A1')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full  bg-[#D4D4D4] focus:ring-4 focus:ring-[#D4D4D4] focus:ring-offset-2"
              onClick={() => onColorSelect('#D4D4D4')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full border-[1px] border-black  bg-white focus:ring-4 focus:ring-black focus:ring-offset-2"
              onClick={() => onColorSelect('#FFFFFF')}
            ></button>
          </div>
          <div className="ml-auto mr-auto mt-[28px] flex">
            <button
              className="h-10 w-10 rounded-full bg-[#6F574C]  focus:ring-4 focus:ring-[#6F574C] focus:ring-offset-2"
              onClick={() => onColorSelect('#6F574C')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full  bg-[#DC6C44] focus:ring-4 focus:ring-[#DC6C44] focus:ring-offset-2"
              onClick={() => onColorSelect('#DC6C44')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full  bg-[#E5A04D] focus:ring-4 focus:ring-[#E5A04D] focus:ring-offset-2"
              onClick={() => onColorSelect('#E5A04D')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full  bg-[#EEC45C] focus:ring-4 focus:ring-[#EEC45C] focus:ring-offset-2"
              onClick={() => onColorSelect('#EEC45C')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full  bg-[#F9EB76] focus:ring-4 focus:ring-[#F9EB76] focus:ring-offset-2"
              onClick={() => onColorSelect('#F9EB76')}
            ></button>
          </div>
          <div className="ml-auto mr-auto mt-[28px] flex">
            <button
              className="h-10 w-10 rounded-full bg-[#90B05F]  focus:ring-4 focus:ring-[#90B05F] focus:ring-offset-2"
              onClick={() => onColorSelect('#90B05F')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full bg-[#6C9B5A]  focus:ring-4 focus:ring-[#6C9B5A] focus:ring-offset-2"
              onClick={() => onColorSelect('#6C9B5A')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full bg-[#589288]  focus:ring-4 focus:ring-[#589288] focus:ring-offset-2"
              onClick={() => onColorSelect('#589288')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full bg-[#6FB8CE]  focus:ring-4 focus:ring-[#6FB8CE] focus:ring-offset-2"
              onClick={() => onColorSelect('#6FB8CE')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full bg-[#63A6EB]  focus:ring-4 focus:ring-[#63A6EB] focus:ring-offset-2"
              onClick={() => onColorSelect('#63A6EB')}
            ></button>
          </div>
          <div className="ml-auto mr-auto mt-[28px] flex">
            <button
              className="h-10 w-10 rounded-full bg-[#3F4B9F]  focus:ring-4 focus:ring-[#3F4B9F] focus:ring-offset-2"
              onClick={() => onColorSelect('#3F4B9F')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full bg-[#5B41AA]  focus:ring-4 focus:ring-[#5B41AA] focus:ring-offset-2"
              onClick={() => onColorSelect('#5B41AA')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full bg-[#843CA4]  focus:ring-4 focus:ring-[#843CA4] focus:ring-offset-2"
              onClick={() => onColorSelect('#843CA4')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full  bg-[#C54665] focus:ring-4 focus:ring-[#C54665] focus:ring-offset-2"
              onClick={() => onColorSelect('#C54665')}
            ></button>
            <button
              className="ml-5 h-10 w-10 rounded-full  bg-[#D15C49] focus:ring-4 focus:ring-[#D15C49] focus:ring-offset-2"
              onClick={() => onColorSelect('#D15C49')}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

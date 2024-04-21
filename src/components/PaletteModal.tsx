export default function PaletteModal() {
  return (
    <div className="flex h-[434px] w-[390px] flex-col rounded-t-3xl bg-white">
      <div className="mt-[32px] flex h-[39px] flex-row">
        <div className="ml-[37px] flex items-center text-xl font-bold">
          컬러 팔레트
        </div>
        <button className="custom-waguri-font ml-[124px] flex h-[39px] w-[90px] items-center justify-center gap-1 rounded-md bg-[#E0FF68]  py-[14px] text-center text-lg text-black">
          확인
        </button>
      </div>
      <div className="ml-auto mr-auto mt-[60px] flex flex-col">
        <div>
          <button className="h-10 w-10 rounded-full bg-black"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#5D5D5D]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#A1A1A1]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#D4D4D4]"></button>
          <button className="ml-5 h-10 w-10 rounded-full border-[1px] border-black bg-white"></button>
        </div>
        <div className="ml-auto mr-auto mt-[28px] flex">
          <button className="h-10 w-10 rounded-full bg-[#6F574C]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#DC6C44]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#E5A04D]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#EEC45C]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#F9EB76]"></button>
        </div>
        <div className="ml-auto mr-auto mt-[28px] flex">
          <button className="h-10 w-10 rounded-full bg-[#90B05F]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#6C9B5A]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#589288]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#6FB8CE]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#63A6EB]"></button>
        </div>
        <div className="ml-auto mr-auto mt-[28px] flex">
          <button className="h-10 w-10 rounded-full bg-[#3F4B9F]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#5B41AA]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#843CA4]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#C54665]"></button>
          <button className="ml-5 h-10 w-10 rounded-full bg-[#D15C49]"></button>
        </div>
      </div>
    </div>
  );
}

interface DrawingOrderProps {
  width: number;
  height: number;
  positionStyle: React.CSSProperties;
}

export default function DrawingOrder({
  width,
  height,
  positionStyle,
}: DrawingOrderProps) {
  return (
    <div
      className="absolute flex flex-row rounded-md bg-[#EAEAEA] px-3 py-[6px]"
      style={{ width: `${width}px`, height: `${height}px`, ...positionStyle }}
    >
      <div className="text-sm font-bold text-[#9B9B9B]">그림 순서</div>
      <div className="ml-auto text-sm font-bold">1/4</div>
    </div>
  );
}

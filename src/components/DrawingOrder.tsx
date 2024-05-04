interface DrawingOrderProps {
  width: number;
  height: number;
  positionStyle: React.CSSProperties;
  count? : string | null;
}

export default function DrawingOrder({
  width,
  height,
  positionStyle,
  count
}: DrawingOrderProps) {
  return (
    <div
      className="absolute flex flex-row rounded-md bg-[#EAEAEA] px-3 py-[6px]"
      style={{ width: `${width}px`, height: `${height}px`, ...positionStyle }}
    >
      <div className="text-sm font-bold text-[#9B9B9B]">그림 순서</div>
      <div className="ml-auto text-sm font-bold">{count}/4</div>
    </div>
  );
}

import { useEffect, useState, useRef } from 'react';
import { fabric } from 'fabric';

const CanvasComponent = () => {
  const [isDrawingMode, setIsDrawingMode] = useState(true);
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(2);
  const [brushType, setBrushType] = useState('pencil');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasInstance = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 350,
      height: 455,
      backgroundColor: 'white',
      isDrawingMode: isDrawingMode,
    });
    canvasInstance.current = canvas;
    setupBrush();

    return () => {
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (canvasInstance.current) {
      canvasInstance.current.isDrawingMode = isDrawingMode;
      setupBrush();
    }
  }, [isDrawingMode, color, lineWidth, brushType]);

  function setupBrush() {
    const canvas = canvasInstance.current;
    if (!canvas) return;

    let brush = new fabric.PencilBrush(canvas);

    brush.color = color;
    brush.width = lineWidth;
    canvas.freeDrawingBrush = brush;
  }
  const handleClear = () => {
    const canvas = canvasInstance.current;
    if (!canvas) return;
    canvas.clear();
  };
  return (
    <div>
      <canvas
        ref={canvasRef}
        id="canvas"
        width={350}
        height={455}
        className=" rounded-lg"
      />
      <div className="mb-16  mt-[13px]  flex w-[350px] justify-center rounded-lg bg-[#EAEAEA] px-[19px]  py-[14px]">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <span className="ml-auto mr-1">펜 굵기</span>
        <input
          type="range"
          min="1"
          max="10"
          value={lineWidth}
          onChange={(e) => setLineWidth(parseInt(e.target.value))}
        />
        <div className="ml-auto flex">
          <button onClick={handleClear}>지우기</button>
        </div>
      </div>
    </div>
  );
};

export default CanvasComponent;

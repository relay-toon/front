import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';

export default function FabricCanvas() {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [brushColor, setBrushColor] = useState<string>('#000000');
  const [brushSize, setBrushSize] = useState<number>(4);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && !canvas) {
      const initCanvas = new fabric.Canvas(canvasRef.current, {
        width: 350,
        height: 455,
        backgroundColor: 'white',
      });
      initCanvas.isDrawingMode = true;
      initCanvas.freeDrawingBrush.color = brushColor;
      initCanvas.freeDrawingBrush.width = brushSize;
      setCanvas(initCanvas);
      console.log('Canvas initialized');
    }

    return () => {
      canvas?.dispose();
    };
  }, [canvasRef.current]);

  const handleColorChange = (color: string) => {
    setBrushColor(color);
    if (canvas) {
      canvas.freeDrawingBrush.color = color;
      console.log('Color changed:', color);
    }
  };

  const handleSizeChange = (size: number) => {
    setBrushSize(size);
    if (canvas) {
      canvas.freeDrawingBrush.width = size;
      console.log('Size changed:', size);
    }
  };

  return (
    <div>
      {/* 그림판 브러쉬랑 색상적용문제 수정해야함 */}
      <canvas ref={canvasRef} />
      <div className=" mb-14 ml-auto mr-auto mt-[13px] flex h-16 w-[350px] flex-row items-center  rounded-lg bg-[#EAEAEA] px-[19px] py-[14px]">
        <div id="colorPalette">
          <button
            className="h-9 w-9 rounded-md bg-red-500"
            onClick={() => handleColorChange('#EF4444')}
          ></button>
          <button
            className="ml-[13px] h-9 w-9 rounded-md bg-green-500"
            onClick={() => handleColorChange('#22C55E')}
          ></button>
          <button
            className="ml-[13px] h-9 w-9 rounded-md bg-blue-700"
            onClick={() => handleColorChange('#1D4ED8')}
          ></button>
        </div>
        <div className="ml-[13px] flex items-center " id="brushSize">
          <button
            className="h-[6px] w-[6px] rounded-full border-[1px] border-[#C4C4C4] bg-black"
            onClick={() => handleSizeChange(5)}
          ></button>
          <button
            className="ml-[13px] h-2 w-2  rounded-full border-[1px]  border-[#C4C4C4] bg-black"
            onClick={() => handleSizeChange(10)}
          ></button>
          <button
            className="ml-[13px] h-[9px] w-[9px] rounded-full border-[1px]  border-[#C4C4C4] bg-black"
            onClick={() => handleSizeChange(40)}
          ></button>
          <button
            className="ml-[13px] h-[10px] w-[10px] rounded-full border-[1px]  border-[#C4C4C4] bg-black"
            onClick={() => handleSizeChange(40)}
          ></button>
          <button
            className="ml-[13px] h-[12px] w-[12px] rounded-full border-[1px]  border-[#C4C4C4] bg-black"
            onClick={() => handleSizeChange(40)}
          ></button>
          <button
            className=" ml-[13px] h-[14px] w-[14px] rounded-full border-[1px]  border-[#C4C4C4] bg-black"
            onClick={() => handleSizeChange(40)}
          ></button>
          <button
            className="ml-[13px] h-[28px] w-[28px] rounded-full border-[1px]  border-[#C4C4C4] bg-black"
            onClick={() => handleSizeChange(40)}
          ></button>
        </div>
      </div>
    </div>
  );
}

// 이게 처음꺼

// import { fabric } from 'fabric';
// import { useEffect, useRef, useState } from 'react';

// export default function FabricCanvas() {
//   const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
//   const [brushColor, setBrushColor] = useState<string>('#000000');
//   const [brushSize, setBrushSize] = useState<number>(4);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (canvasRef.current && !canvas) {
//       const initCanvas = new fabric.Canvas(canvasRef.current, {
//         width: 350,
//         height: 455,
//         backgroundColor: 'white',
//       });
//       initCanvas.isDrawingMode = true;
//       initCanvas.freeDrawingBrush.color = brushColor;
//       initCanvas.freeDrawingBrush.width = brushSize;
//       setCanvas(initCanvas);
//       console.log(initCanvas);
//     }

//     return () => {
//       canvas?.dispose();
//     };
//   }, [canvasRef.current, canvas]);

//   useEffect(() => {
//     if (canvas) {
//       canvas.freeDrawingBrush.color = brushColor;
//     }
//   }, [brushColor, canvas]);

//   // Update brush size
//   useEffect(() => {
//     if (canvas) {
//       canvas.freeDrawingBrush.width = brushSize;
//     }
//   }, [brushSize, canvas]);
//   const handleColorChange = (color: string) => {
//     setBrushColor(color);
//     if (canvas) {
//       canvas.freeDrawingBrush.color = color;
//       console.log('Color changed:', color);
//       console.log('canvas:', canvas);
//     }
//   };

//   const handleSizeChange = (size: number) => {
//     setBrushSize(size);
//     if (canvas) {
//       canvas.freeDrawingBrush.width = size;
//       console.log('Size changed:', size);
//       console.log;
//     }
//   };

//   return (
//     <div>
//       {/* 그림판 브러쉬랑 색상적용문제 수정해야함 */}
//       <canvas ref={canvasRef} />
//       <div className=" mb-14 ml-auto mr-auto mt-[13px] flex h-16 w-[350px] flex-row items-center  rounded-lg bg-[#EAEAEA] px-[19px] py-[14px]">
//         <div id="colorPalette">
//           <button
//             className="h-9 w-9 rounded-md bg-red-500"
//             onClick={() => handleColorChange('#EF4444')}
//           ></button>
//           <button
//             className="ml-[13px] h-9 w-9 rounded-md bg-green-500"
//             onClick={() => handleColorChange('#22C55E')}
//           ></button>
//           <button
//             className="ml-[13px] h-9 w-9 rounded-md bg-blue-700"
//             onClick={() => handleColorChange('#1D4ED8')}
//           ></button>
//         </div>
//         <div className="ml-[13px] flex items-center " id="brushSize">
//           <button
//             className="h-[6px] w-[6px] rounded-full border-[1px] border-[#C4C4C4] bg-black"
//             onClick={() => handleSizeChange(6)}
//           ></button>
//           <button
//             className="ml-[13px] h-2 w-2  rounded-full border-[1px]  border-[#C4C4C4] bg-black"
//             onClick={() => handleSizeChange(8)}
//           ></button>
//           <button
//             className="ml-[13px] h-[9px] w-[9px] rounded-full border-[1px]  border-[#C4C4C4] bg-black"
//             onClick={() => handleSizeChange(9)}
//           ></button>
//           <button
//             className="ml-[13px] h-[10px] w-[10px] rounded-full border-[1px]  border-[#C4C4C4] bg-black"
//             onClick={() => handleSizeChange(10)}
//           ></button>
//           <button
//             className="ml-[13px] h-[12px] w-[12px] rounded-full border-[1px]  border-[#C4C4C4] bg-black"
//             onClick={() => handleSizeChange(12)}
//           ></button>
//           <button
//             className=" ml-[13px] h-[14px] w-[14px] rounded-full border-[1px]  border-[#C4C4C4] bg-black"
//             onClick={() => handleSizeChange(14)}
//           ></button>
//           <button
//             className="ml-[13px] h-[28px] w-[28px] rounded-full border-[1px]  border-[#C4C4C4] bg-black"
//             onClick={() => handleSizeChange(28)}
//           ></button>
//         </div>
//       </div>
//     </div>
//   );
// }

// -----------------------------------
//  이게 마지막
// import { useEffect, useState, useRef } from 'react';
// import { fabric } from 'fabric';

// const CanvasComponent = () => {
//   const [isDrawingMode, setIsDrawingMode] = useState(true);
//   const [color, setColor] = useState('#000000');
//   const [lineWidth, setLineWidth] = useState(2);
//   const [brushType, setBrushType] = useState('pencil');
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (!canvasRef.current) return undefined;

//     const canvas = new fabric.Canvas(canvasRef.current, {
//       isDrawingMode: isDrawingMode,
//     });

//     setupBrush(canvas, brushType, color, lineWidth);

//     return () => {
//       canvas.dispose();
//     };
//   }, [isDrawingMode, color, lineWidth, brushType]);

//   function setupBrush(
//     canvas: fabric.Canvas,
//     brushType: string,
//     color: string,
//     lineWidth: number,
//   ) {
//     let brush: fabric.BaseBrush;
//     switch (brushType) {
//       default:
//         brush = new fabric.PencilBrush(canvas);
//         break;
//     }

//     brush.color = color;
//     brush.width = lineWidth;
//     canvas.freeDrawingBrush = brush;
//   }

//   return (
//     <div className="p-4">
//       <canvas ref={canvasRef} id="c" width={800} height={600} />
//       <div className="mt-2 flex space-x-2">
//         <button onClick={() => setIsDrawingMode(!isDrawingMode)}>
//           {isDrawingMode ? 'Stop Drawing' : 'Start Drawing'}
//         </button>
//         <input
//           type="color"
//           value={color}
//           onChange={(e) => setColor(e.target.value)}
//         />
//         <input
//           type="range"
//           min="1"
//           max="10"
//           value={lineWidth}
//           onChange={(e) => setLineWidth(parseInt(e.target.value))}
//         />
//         <select
//           value={brushType}
//           onChange={(e) => setBrushType(e.target.value)}
//         >
//           <option value="pencil">연필</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default CanvasComponent;

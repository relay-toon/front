'use client';
import { fabric } from 'fabric';
import { useEffect, useState } from 'react';

export default function CompTest() {
  const [isDrawingMode, setIsDrawingMode] = useState(true);
  const [canvas, setCanvas] = useState<fabric.Canvas>();
  const [objects, setObjects] = useState<fabric.Object[]>([]);
  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      width: 350,
      height: 407,
      backgroundColor: 'white',
      isDrawingMode: isDrawingMode,
      selection: false,
      defaultCursor: 'crosshair',
    });

    setCanvas(canvas);

    // canvas.on('mouse:move', (e) => {
    //   const mEvent = e.e;
    //   const delta = new fabric.Point(mEvent.movementX, mEvent.movementY);
    //   canvas.relativePan(delta);
    // });
    return () => {
      if (canvas) {
        canvas.dispose();
      }
    };
  }, []);

  
  useEffect(() => {
    if (canvas) {
      canvas.on('object:added', handleObjectAdded);
    }
    return () => {
      if (canvas) {
        canvas.off('object:added', handleObjectAdded);
      }
    };
  }, [canvas]);

  function handleObjectAdded(event: fabric.IEvent) {
    const obj = event.target as fabric.Object;
    setObjects(prevObjects => [...prevObjects, obj]);
  }

  function clearCanvas() {
    if (canvas) {
      objects.forEach(obj => canvas.remove(obj));
      setObjects([]); // state 초기화
      canvas.requestRenderAll(); // 변경사항을 캔버스에 적용
    }
  }


  return (
    <div className="flex h-screen items-center justify-center">
      {/* <button onClick={() => addRect(canvas)}>Rectangle</button> */}
      <canvas id="canvas"></canvas>
      <button onClick={clearCanvas}>Clear</button>
    </div>
  );
}

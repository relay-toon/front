// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { fabric } from 'fabric';
import Image from 'next/image';
import PaletteModal from './PaletteModal';
import PencilIcon from '@/public/svg/pencil.svg';
import CircleBrushIcon from '@/public/svg/brush.svg';
import EraserIcon from '@/public/svg/eraser.svg';

export interface FabricCanvasProps {
  prevPicture?: string;
}

export interface FabricCanvasHandle {
  getCanvas: () => HTMLCanvasElement | null;
  canvasInstance: fabric.Canvas | null;
}

const FabricCanvas = forwardRef<FabricCanvasHandle, FabricCanvasProps>(
  (props, ref) => {
    const [isDrawingMode] = useState(true);
    const [color, setColor] = useState('#000000');
    const [lineWidth, setLineWidth] = useState(4);
    const [brushType, setBrushType] = useState('pencil');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasInstance = useRef<fabric.Canvas | null>(null);
    const [showPalette, setShowPalette] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const timestamp = useRef(new Date().getTime()).current;

    useImperativeHandle(ref, () => ({
      getCanvas: () => canvasRef.current,
      canvasInstance: canvasInstance.current,
    }));

    useEffect(() => {
      if (!canvasRef.current) return;

      const canvas = new fabric.Canvas(canvasRef.current, {
        width: 350,
        height: 407,
        backgroundColor: 'white',
        isDrawingMode: isDrawingMode,
      });

      canvasInstance.current = canvas;

      setupBrush();

      return () => {
        if (canvasInstance.current) {
          canvasInstance.current.dispose();
          canvasInstance.current = null;
        }
      };
    }, []);

    useEffect(() => {
      if (props.prevPicture && canvasInstance.current) {
        const checkCanvasInitialized = () => {
          if (canvasInstance.current) {
            loadAndDrawImage(props.prevPicture!, canvasInstance.current);
          } else {
            requestAnimationFrame(checkCanvasInitialized);
          }
        };
        requestAnimationFrame(checkCanvasInitialized);
      }
    }, [props.prevPicture]);
    function loadAndDrawImage(url: string, canvas: fabric.Canvas) {
      const timestampedUrl = `${url}?t=${timestamp}`;
      fabric.Image.fromURL(
        timestampedUrl,
        (img) => {
          if (canvas && img) {
            img.set({ selectable: false, evented: false });
            img.scaleToWidth(canvas.width!);
            img.scaleToHeight(canvas.height!);

            canvas.add(img);
            canvas.sendToBack(img);
            canvas.renderAll();
          } else {
            setError('이미지를 불러오는 중 오류가 발생했습니다.');
            alert(error);
          }
        },
        { crossOrigin: 'anonymous' },
      );
    }

    useEffect(() => {
      if (canvasInstance.current) {
        canvasInstance.current.isDrawingMode = isDrawingMode;
        setupBrush();
      }
    }, [isDrawingMode, color, lineWidth, brushType]);

    function setupBrush() {
      const canvas = canvasInstance.current;
      if (!canvas) return;

      let brush;
      switch (brushType) {
        case 'pencil':
          brush = new fabric.PencilBrush(canvas);
          break;
        case 'circle':
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          brush = new fabric.CircleBrush(canvas);
          break;
        case 'eraser':
          brush = new fabric.PencilBrush(canvas);
          brush.width = lineWidth;
          brush.color = 'white';
          brush.globalCompositeOperation = 'destination-out';
          break;
        default:
          brush = new fabric.PencilBrush(canvas);
          break;
      }

      if (brushType !== 'eraser') {
        brush.color = color;
      }
      brush.width = lineWidth;
      canvas.freeDrawingBrush = brush;
    }

    const handleClear = () => {
      const canvas = canvasInstance.current;
      if (!canvas) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      canvas.getObjects().forEach((obj: any) => {
        if (obj.type !== 'image') {
          canvas.remove(obj);
        }
      });
      canvas.renderAll();
    };

    const handleColorChange = (color: string) => {
      setColor(color);
      const canvas = canvasInstance.current;
      if (canvas) {
        canvas.freeDrawingBrush.color = color;
      }
    };

    const handleSizeChange = (size: number) => {
      setLineWidth(size);
      const canvas = canvasInstance.current;
      if (canvas) {
        canvas.freeDrawingBrush.width = size;
      }
    };

    const handleOpenPalette = () => {
      setShowPalette(true);
    };

    const handleClosePalette = () => {
      setShowPalette(false);
    };
    return (
      <div>
        <canvas
          ref={canvasRef}
          id="canvas"
          width={350}
          height={407}
          className="rounded-lg"
        />
        <div className="ml-auto mr-auto mt-3 flex h-[45px] w-[350px] rounded-lg bg-[#EAEAEA]">
          <span className="ml-[18.5px] flex items-center text-base font-extrabold">
            크기
          </span>
          <input
            type="range"
            min={1}
            max={30}
            value={lineWidth}
            onChange={(e) => handleSizeChange(Number(e.target.value))}
            className="ml-[10px] flex h-[12px] w-[243px] self-center"
          />
          <span className="ml-[10px] flex items-center text-base font-extrabold">
            {lineWidth}
          </span>
        </div>
        <div className="mb-8 ml-auto mr-auto mt-[13px] flex h-16 w-[350px] flex-row items-center rounded-lg bg-[#EAEAEA] px-[19px] py-[14px]">
          <div id="colorPalette" className="flex">
            <button
              className="h-9 w-9 rounded-md"
              onClick={() => setBrushType('pencil')}
            >
              <PencilIcon
                style={{ fill: brushType === 'pencil' ? '#000000' : '#B4B4B4' }}
              />
            </button>
            <button
              className="ml-[13px] h-9 w-9 rounded-md"
              onClick={() => setBrushType('circle')}
            >
              <CircleBrushIcon
                style={{ fill: brushType === 'circle' ? '#000000' : '#B4B4B4' }}
              />
            </button>
            <button
              className="ml-[13px] h-9 w-9 rounded-md"
              onClick={() => setBrushType('eraser')}
            >
              <EraserIcon
                style={{ fill: brushType === 'eraser' ? '#000000' : '#B4B4B4' }}
              />
            </button>
            <button
              className="ml-[13px] h-9 w-9 rounded-md"
              onClick={handleClear}
            >
              <Image src="/svg/reset.svg" alt="reset" width={36} height={36} />
            </button>
            <button
              className="ml-[100px] flex h-[28px] w-[28px] self-center rounded-full border-[2px] border-[#C4C4C4]"
              style={{ backgroundColor: `${color}` }}
              onClick={handleOpenPalette}
            ></button>
            <div className="relative w-[390px]">
              {showPalette && (
                <PaletteModal
                  onClose={handleClosePalette}
                  onColorSelect={handleColorChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);
FabricCanvas.displayName = 'FabricCanvas';

export default FabricCanvas;

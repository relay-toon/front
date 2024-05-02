import { fabric } from 'fabric';
declare module 'fabric' {
  namespace fabric {
    interface BaseBrush {
      globalCompositeOperation?: string;
    }
    class CircleBrush extends BaseBrush {
      constructor(canvas: Canvas);
    }
  }
}

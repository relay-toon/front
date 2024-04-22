import { fabric } from 'fabric';
declare module 'fabric' {
  namespace fabric {
    interface BaseBrush {
      globalCompositeOperation?: string;
    }
  }
}

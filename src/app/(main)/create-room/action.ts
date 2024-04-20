export const moseoverHandler = () => {
  const item = document.getElementById('item');
  const slider = document.getElementById('slider');
  const clientWidth = item?.clientWidth;

  slider?.addEventListener('wheel', (e) => {
    if (e.deltaY < 0 && clientWidth) {
      slider.scrollLeft -= clientWidth * 2;
    } else if (e.deltaY > 0 && clientWidth) {
      slider.scrollLeft += clientWidth * 2;
    }
  });
};

export const timeSetMoseoverHandler = () => {
  const timeItem = document.getElementById('timeItem');
  const drawingTimeSlider = document.getElementById('drawingTimeSlider');
  const clientWidth = timeItem?.clientWidth;

  drawingTimeSlider?.addEventListener('wheel', (e) => {
    if (e.deltaY < 0 && clientWidth) {
      drawingTimeSlider.scrollLeft -= clientWidth * 2;
    } else if (e.deltaY > 0 && clientWidth) {
      drawingTimeSlider.scrollLeft += clientWidth * 2;
    }
  });
};

import FabricCanvas from './FabricCanvas';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WrappedCanvas = (props: any) => {
  const { forwardRef } = props;
  return <FabricCanvas {...props} ref={forwardRef} />;
};

export default WrappedCanvas;

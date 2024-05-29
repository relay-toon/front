import FabricCanvas from './FabricCanvas';

const WrappedCanvas = (props: any) => {
  const { forwardRef } = props;
  return <FabricCanvas {...props} ref={forwardRef} />;
};

export default WrappedCanvas;

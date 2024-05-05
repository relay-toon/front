import FabricCanvas from './FabricCanvas';
import PropTypes from 'prop-types';
const WrappedCanvas = (props: any) => {
  const { forwardRef } = props;
  return <FabricCanvas {...props} ref={forwardRef} />;
};
WrappedCanvas.propTypes = {
  forwardedRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default WrappedCanvas;

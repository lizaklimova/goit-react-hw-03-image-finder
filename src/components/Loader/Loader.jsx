import { Hearts } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => (
  <LoaderWrapper>
    <Hearts
      height="80"
      width="80"
      color="#7da0b1"
      ariaLabel="hearts-loading"
      visible={true}
    />
  </LoaderWrapper>
);

export default Loader;

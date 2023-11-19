import ContentLoader from 'react-content-loader';

const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#7da0b167"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-34" y="-20" rx="2" ry="2" width="100%" height="232" />
  </ContentLoader>
);

export default Skeleton;

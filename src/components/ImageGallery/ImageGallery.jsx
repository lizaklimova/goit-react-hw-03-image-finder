import ImageGalleryItem from '../ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

function ImageGallery({ pics, showSkeleton }) {
  console.log(showSkeleton);
  return (
    <GalleryList>
      {pics.map(pic => (
        <ImageGalleryItem key={pic.id} image={pic} skeleton={showSkeleton} />
      ))}
    </GalleryList>
  );
}

export default ImageGallery;

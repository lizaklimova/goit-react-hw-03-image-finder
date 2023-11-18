import ImageGalleryItem from '../ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

function ImageGallery({ pics }) {
  return (
    <GalleryList>
      {pics.map(pic => (
        <ImageGalleryItem key={pic.id} image={pic} />
      ))}
    </GalleryList>
  );
}

export default ImageGallery;

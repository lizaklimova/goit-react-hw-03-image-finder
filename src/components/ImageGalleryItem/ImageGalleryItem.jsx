import { Component } from 'react';
import Modal from '../Modal';
import { GalleryPic, ImgCard } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isModalShown: false,
  };

  toggleModal = () => {
    this.setState(({ isModalShown }) => ({ isModalShown: !isModalShown }));
  };

  render() {
    const {
      image: { webformatURL, tags, largeImageURL },
    } = this.props;

    const { isModalShown } = this.state;

    return (
      <>
        <GalleryPic onClick={this.toggleModal}>
          <ImgCard src={webformatURL} alt={tags} />
        </GalleryPic>
        {isModalShown && (
          <Modal src={largeImageURL} alt={tags} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

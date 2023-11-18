import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow, Picture } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) this.props.onClose();
  };

  render() {
    const { src, alt } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalWindow>
          <Picture src={src} alt={alt} />
        </ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;

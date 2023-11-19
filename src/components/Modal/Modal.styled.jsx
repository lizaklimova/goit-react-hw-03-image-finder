import { styled } from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(125, 127, 157, 0.849);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 20px;
  width: 87%;
  height: 70%;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  @media screen and (min-width: 457px) {
    width: 90%;
  }
`;

export const Picture = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

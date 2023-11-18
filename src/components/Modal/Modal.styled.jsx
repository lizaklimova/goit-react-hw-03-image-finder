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
  width: 600px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Picture = styled.img`
  display: block;
  width: 100%;
`;

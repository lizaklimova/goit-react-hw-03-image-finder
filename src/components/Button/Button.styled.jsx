import { styled } from 'styled-components';

export const LoadMore = styled.button`
  display: block;
  width: 150px;
  height: 40px;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid #7da0b1;
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: all 300ms linear;

  &:hover,
  &:focus {
    transform: scale(1.05);
    background-color: rgba(125, 160, 177, 0.685);
    border-color: #010101;
  }
`;

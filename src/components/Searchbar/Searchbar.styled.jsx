import { styled } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: #7da0b1;
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 400px;
  padding: 12px 35px;
  border: none;
  border-radius: 20px;
  transition: outline 300ms ease-in-out;
  &:focus {
    outline: 2px solid black;
  }
`;

export const SearchBtn = styled.button`
  margin-right: -37px;
  z-index: 2;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 300ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;

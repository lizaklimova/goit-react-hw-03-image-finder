import { styled } from 'styled-components';

export const GalleryPic = styled.li`
  width: 100%;
  height: 190px;
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgba(18, 18, 18, 0.476) 0px 1px 2px 1px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  transition: box-shadow 300ms linear;

  &:hover,
  &:focus {
    box-shadow: rgba(125, 160, 177, 0.883) 5px 5px,
      rgba(125, 160, 177, 0.558) 10px 10px, rgba(125, 160, 177, 0.4) 15px 15px,
      rgba(125, 160, 177, 0.2) 20px 20px, rgba(125, 160, 177, 0.1) 25px 25px;
  }

  @media screen and (min-width: 378px) {
    width: calc((100% - 30px) / 2);
    height: 150px;
  }

  @media screen and (min-width: 530px) {
    width: calc((100% - 60px) / 3);
    height: 120px;
  }

  @media screen and (min-width: 750px) {
    width: calc((100% - 60px) / 3);
    height: 170px;
  }

  @media screen and (min-width: 1000px) {
    width: calc((100% - 90px) / 4);
    height: 180px;
  }
  @media screen and (min-width: 1340px) {
    width: calc((100% - 120px) / 5);
  }
`;

export const ImgCard = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  transition: all 300ms linear;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

import styled from '@emotion/styled';

export const ImgTag = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 320px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    //justify-content:space-between;
    gap: 10px;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: black;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
  }
`;

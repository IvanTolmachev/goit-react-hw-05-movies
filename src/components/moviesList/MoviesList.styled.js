import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 40px;
  color: black;
`;

export const StyledLink = styled(Link)`
  color: black;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  color: black;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  background-color: #20b2aa;
  border-radius: 20px;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    width: 375px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 28px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Img = styled.img`
  border-radius: 20px;
`;

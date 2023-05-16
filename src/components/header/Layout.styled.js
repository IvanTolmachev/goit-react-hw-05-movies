import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 60px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 30px;
  font-weight: 900;
  height: 100%;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
  width: 1200px;
`;

export const HeaderTag = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #4682b4;
  border-bottom: 1px solid gray;
  box-shadow: 2px 3px 5px lightgrey;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: #00bfff;
  }
`;

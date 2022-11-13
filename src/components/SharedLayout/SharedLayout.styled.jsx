import { NavLink } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const Container = styled.div`
  margin: 0 15px;
`;
export const Navigation = styled.nav`
  padding: 20px;
  background-color: #7fd1ae;
  display: flex;
  gap: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const MenuLink = styled(NavLink)`
  color: #8685ef;
  text-decoration: none;
  &.active {
    color: #323232;
  }
`;
export const Content = styled.div`
  margin: 15px;
`;

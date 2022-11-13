import {
  Container,
  Content,
  Navigation,
  MenuLink,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Navigation>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/movies">Movies</MenuLink>
        </Navigation>
      </Container>
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

import {
  Container,
  Content,
  Navigation,
  MenuLink,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Content>
    </>
  );
};

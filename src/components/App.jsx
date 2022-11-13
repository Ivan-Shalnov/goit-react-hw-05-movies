import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails></MovieDetails>}>
          <Route path="cast" element={<Cast></Cast>}></Route>
          <Route path="reviews" element={<Reviews></Reviews>}></Route>
        </Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
};

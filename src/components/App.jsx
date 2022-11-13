import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';
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

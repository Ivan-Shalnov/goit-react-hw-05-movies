import { MovieCard } from 'components/MovieCard/MovieCard';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <div>
      <MovieCard movieId={movieId}></MovieCard>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

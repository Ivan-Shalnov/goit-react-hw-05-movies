import { MovieCard } from 'components/MovieCard/MovieCard';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  return (
    <div>
      <MovieCard movieId={movieId}></MovieCard>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link
              to={`/movies/${movieId}/cast`}
              state={{ from: location.state.from }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${movieId}/reviews`}
              state={{ from: location.state.from }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;

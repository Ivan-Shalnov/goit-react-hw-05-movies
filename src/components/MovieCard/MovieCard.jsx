import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/getMovieDetails';
import { Poster, Wrap, MovieInfo } from './MovieCard.styled';
import noPosterImage from './img/noposter.png';
import { useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
export const MovieCard = ({ movieId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation();
  console.log(location.state);
  const [movieData, setMovieData] = useState(null);
  const userScore = movieData ? (movieData?.vote_average * 10).toFixed(1) : 0;
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(false);
      try {
        const data = await getMovieDetails(movieId);
        setMovieData(data);
      } catch (message) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      {location?.state?.from && <BackLink to={location.state.from} />}
      <Wrap>
        {isLoading ? (
          <>
            <Poster>
              <Skeleton height="100%" />
            </Poster>
            <MovieInfo>
              <h2>
                <Skeleton width="15em" />
              </h2>
              <Skeleton width="10em" />
              <h3>
                <Skeleton width="5em" />
              </h3>
              <p>
                <Skeleton count={5} />
              </p>
              <h3>
                <Skeleton width="5em" />
              </h3>
              <ul>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <li key={i}>{<Skeleton width="5em" />}</li>
                  ))}
              </ul>
            </MovieInfo>
          </>
        ) : (
          <>
            <Poster>
              <img
                src={
                  movieData.poster_path
                    ? 'https://image.tmdb.org/t/p/w500' + movieData.poster_path
                    : noPosterImage
                }
                alt={movieData.title}
              />
            </Poster>
            <MovieInfo>
              <h2>{movieData.title}</h2>
              <p>User Score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{movieData.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movieData.genres.map(({ name, id }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </MovieInfo>
          </>
        )}
      </Wrap>
    </>
  );
};
MovieCard.propTypes = {
  movieId: PropTypes.string.isRequired,
};

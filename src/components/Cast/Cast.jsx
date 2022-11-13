import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api/getMovieCredits';
import { List } from './Cast.styled';
import noPhotoImg from './img/nophoto.png';

export const Cast = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState([]);
  const { movieId } = useParams(null);
  useEffect(() => {
    (async () => {
      setError(false);
      setIsLoading(true);
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (message) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);
  if (error) return <p>Something went wrong</p>;
  if (isLoading) {
    return (
      <List>
        {Array(15)
          .fill(0)
          .map((_, i) => (
            <li key={i}>
              <Skeleton height={260} />
              <h4>
                <Skeleton />
              </h4>
              <p>
                <Skeleton />
              </p>
            </li>
          ))}
      </List>
    );
  }
  return (
    <List>
      {cast.length > 0 ? (
        cast.map(({ name, profile_path, character, id }) => (
          <li key={id}>
            {
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : noPhotoImg
                }
                alt={name}
              ></img>
            }
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </li>
        ))
      ) : (
        <div>There is no information about cast</div>
      )}
    </List>
  );
};

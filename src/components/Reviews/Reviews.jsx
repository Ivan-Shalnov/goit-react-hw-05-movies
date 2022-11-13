import { getMovieReviews } from 'api/getMovieReviews';
import { useEffect } from 'react';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import { List } from './Reviews.styled';
export const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setError(false);
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);
  if (error) return <p>Something went wrong</p>;
  if (isLoading)
    return (
      <List>
        {Array(5)
          .fill(0)
          .map((_, i) => {
            return (
              <li key={i}>
                <p>
                  <Skeleton width="5em"></Skeleton>
                </p>
                <p>
                  <Skeleton count={7} />
                </p>
              </li>
            );
          })}
      </List>
    );
  return (
    <>
      {isLoading && <p>Загрузка</p>}
      {reviews.length !== 0 ? (
        <List>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>
                  <b>Author:</b> {author}
                </p>
                <p>{content}</p>
              </li>
            );
          })}
        </List>
      ) : (
        <div>There are no reviews</div>
      )}
    </>
  );
};

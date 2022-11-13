import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { searchMovie } from 'api/searchMovie';
import { useState } from 'react';
import { List, Pagination } from './Movies.styled';
import { Link } from 'react-router-dom';

import noPosterImage from './img/noposter.png';
import Skeleton from 'react-loading-skeleton';
const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page') || 1;
  const totalPages = data?.total_pages || 0;

  useEffect(() => {
    if (query) {
      (async () => {
        setError(false);
        setIsLoading(true);
        try {
          const data = await searchMovie({ query, page });
          setData(data);
        } catch {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [query, page]);
  const handlePageClick = e => {
    setSearchParams({ query, page: e.selected + 1 });
  };
  return (
    <>
      <SearchForm />
      {(() => {
        if (error) return <p>Something went wrong</p>;
        if (isLoading)
          return (
            <List>
              {Array(20)
                .fill(0)
                .map((_, i) => (
                  <li key={i}>
                    <Skeleton height={200}></Skeleton>
                    <p>
                      <Skeleton width={100} />
                    </p>
                  </li>
                ))}
            </List>
          );
        if (!query || !data) return <p>Type something</p>;
        if (data.results.length === 0) return <p>Nothing found</p>;
        return (
          <>
            <List>
              {data.results.map(({ id, title, poster_path }) => (
                <li key={id}>
                  <Link
                    to={`/movies/${id}`}
                    state={{ from: `/movies/?query=${query}&&page=${page}` }}
                  >
                    <img
                      src={
                        poster_path
                          ? 'https://image.tmdb.org/t/p/w500' + poster_path
                          : noPosterImage
                      }
                      alt={title}
                    />
                    <p>{title}</p>
                  </Link>
                </li>
              ))}
            </List>
            <Pagination
              forcePage={page - 1}
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={totalPages}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </>
        );
      })()}
    </>
  );
};
export default Movies;

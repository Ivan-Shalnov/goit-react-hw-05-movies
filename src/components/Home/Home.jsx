import { useEffect } from 'react';
import { useState } from 'react';
import { fetchTrending } from 'api/fetchTrending';
import { Link } from 'react-router-dom';
export const Home = () => {
  const [trendList, setTrendList] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetchTrending();
      setTrendList(data.results);
    })();
  });
  return (
    <div>
      <h2>Trending today</h2>
      {trendList.length > 0 && (
        <ul>
          {trendList.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: '/' }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'services/fetchApi';

function Home() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(response => setMovies(response.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
    </>
  );
}

export default Home;

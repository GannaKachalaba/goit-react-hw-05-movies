import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
// import { toast } from 'react-toastify';
import { getMovieDetails } from 'services/fetchApi';
import styles from './MovieDetails.module.css';
import NotImage from 'components/NotImage/not_image_found.jpg';

export default function Movie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  // const [error, setError] = useState(null);

  const onGoBack = () => {
    return navigate(location?.state?.from);
  };

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
    // .catch(error => setError(toast.error(error)));
  }, [movieId]);

  return (
    <>
      <button onClick={onGoBack} className={styles.button}>
        &#8592; Go back
      </button>

      {movie && (
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : NotImage
            }
            alt={movie.title}
          ></img>
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average}</p>
          <p>Overview:</p>
          <p>{movie.overview}</p>
          <p>Genres:</p>
          {movie.genres && (
            <ul>
              {movie.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          )}
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to="cast" state={location.state}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={location.state}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
          <Outlet />
        </div>
      )}
    </>
  );
}

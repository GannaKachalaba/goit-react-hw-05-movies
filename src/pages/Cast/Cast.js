import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'services/fetchApi';

export default function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(response => setCredits(response.cast));
  }, [movieId]);

  return (
    <>
      {credits && (
        <ul>
          {credits.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                ></img>
              )}
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

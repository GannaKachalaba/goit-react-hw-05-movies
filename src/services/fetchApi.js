const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '6c76e422f3a2e6dfd0190bb97fc7b987';

export function getTrending() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
    }
  );
}

export function getSearchMovie(searchQuery) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

export function getMovieDetails(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

export function getMovieCredits(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
    }
  );
}

export function getMovieReviews(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
    }
  );
}

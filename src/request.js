const API_KEY = process.env.REACT_APP_API_KEY;

function searchId(id) {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`;
}

function searchTvId(id) {
  return `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=videos,images`;
}

export default {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMysteryMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFiMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWesternMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimationMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTVMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  searchId,
  searchTvId,
};

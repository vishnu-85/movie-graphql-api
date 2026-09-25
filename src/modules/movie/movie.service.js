const movieApiClient = require("../../clients/movie-api.client");
const { mapMovie } = require("./movie.mapper");

async function getMovies() {
  const movies = await movieApiClient.getMovies();

  return movies.map(mapMovie);
}

async function getMovie(id) {
  const movie = await movieApiClient.getMovieById(id);

  return mapMovie(movie);
}

async function watchMovie(id) {
  const movie = await movieApiClient.getMovieById(id);

  if (!movie) {
    throw new Error("Movie not found");
  }

  const mappedMovie = mapMovie(movie);

  return {
    movie: mappedMovie,
    watchUrl: mappedMovie.videoUrl,
    message: mappedMovie.videoUrl
      ? "Movie is available to watch"
      : "No playable video URL is available for this movie",
  };
}

async function getmovieDetail(id) {
  return movieApiClient.getMovieDetail(id)
}

module.exports = {
  getMovies,
  getMovie,
  watchMovie,
  getmovieDetail
};
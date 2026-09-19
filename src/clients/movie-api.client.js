const axios = require("axios");

const movieApiClient = axios.create({
  baseURL: process.env.MOVIE_API_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

async function getMovies() {
  const response = await movieApiClient.get("");

  return response.data;
}

async function getMovieById(id) {
  const movies = await getMovies();

  return movies.find((movie) => String(movie.id) === String(id));
}

module.exports = {
  getMovies,
  getMovieById,
};
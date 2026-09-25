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

async function getMovieDetail(id) { 
  return  {Desc: "Hello World", year: "2505", id: id}
}


module.exports = {
  getMovies,
  getMovieById,
  getMovieDetail
};
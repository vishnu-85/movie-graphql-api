const movieService = require("../../modules/movie/movie.service");

const movieResolvers = {
  Query: {
    movies: async () => {
      return movieService.getMovies();
    },

    movie: async (_, { id }) => {
      return movieService.getMovie(id);
    },

    watchMovie: async (_, { id }) => {
      return movieService.watchMovie(id);
    },
  },
};

module.exports = movieResolvers;
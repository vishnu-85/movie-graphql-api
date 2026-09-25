const { request } = require("../../app");
const movieResolvers = require("./movie.resolver"); 
const modetai = require('../../modules/movie/movie.service')

module.exports = {
  Movie: {
    movieDetail: async (movie) => await modetai.getmovieDetail(movie.id)
  },
  Query: {
    ...movieResolvers.Query,
  },
};
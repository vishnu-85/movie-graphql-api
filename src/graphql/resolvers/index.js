const movieResolvers = require("./movie.resolver");

module.exports = {
  Query: {
    ...movieResolvers.Query,
  },
};
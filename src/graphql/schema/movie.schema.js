const typeDefs = `#graphql

  type MovieDetail{
    id: ID!
    year: String
    Desc: String
  }

  type Movie {
    id: ID!
    title: String
    posterURL: String
    imdbId: String
    movieDetail: MovieDetail
  }

  type WatchMovie {
    movie: Movie!
    watchUrl: String
    message: String!
  }

  type Query {
    movies: [Movie!]!
    movie(id: ID!): Movie
    watchMovie(id: ID!): WatchMovie!
  }
`;

module.exports = typeDefs;
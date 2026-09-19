const typeDefs = `#graphql

  type Movie {
    id: ID!
    title: String
    posterURL: String
    imdbId: String
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
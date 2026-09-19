function mapMovie(movie) {
  if (!movie) {
    return null;
  }

  return {
    id: String(movie.id),
    title: movie.title || null,
    posterURL: movie.posterURL || null,
    imdbId: movie.imdbId || null,
  };
}

module.exports = {
  mapMovie,
};
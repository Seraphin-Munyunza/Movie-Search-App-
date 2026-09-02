function MovieHeader({ movie }) {
  return (
    <>
      <h1  className="text-secondary">{movie.Title}</h1>

      <h5 className="text-info">

        ⭐ {movie.imdbRating}

      </h5>

      <p className="text-secondary">

        {movie.Year} • {movie.Runtime}

      </p>
    </>
  );
}

export default MovieHeader;
function MovieMeta({ movie }) {
  return (
    <div className="mb-4">

      <span className="badge bg-primary me-2">
        {movie.Type}
      </span>

      <span className="badge bg-success me-2">
        {movie.Rated}
      </span>

      <span className="badge bg-warning text-dark">
        {movie.Genre}
      </span>

    </div>
  );
}

export default MovieMeta;
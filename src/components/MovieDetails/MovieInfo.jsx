function MovieInfo({ movie }) {
  return (
    <div className="row mt-4">

      <div className="col-md-6">

        <p><strong>Director:</strong> {movie.Director}</p>

        <p><strong>Writer:</strong> {movie.Writer}</p>

        <p><strong>Actors:</strong> {movie.Actors}</p>

      </div>

      <div className="col-md-6">

        <p><strong>Released:</strong> {movie.Released}</p>

        <p><strong>Language:</strong> {movie.Language}</p>

        <p><strong>Awards:</strong> {movie.Awards}</p>

      </div>

    </div>
  );
}

export default MovieInfo;
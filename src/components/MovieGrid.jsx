function MovieGrid({ movies }) {
  return (
    <div>
      <h3>Movies Found: {movies.length}</h3>

      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <strong>{movie.Title}</strong> ({movie.Year})
        </div>
      ))}
    </div>
  );
}

export default MovieGrid;
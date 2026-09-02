import MovieCard from "./MovieCard";

function MovieGrid({ movies,onViewDetails }) {
  return (
    <div className="container">
      <div className="row">

        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onViewDetails={onViewDetails}
          />
        ))}

      </div>
    </div>
  );
}

export default MovieGrid;
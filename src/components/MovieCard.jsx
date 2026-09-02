import "../styles/MovieCard.css";
import brokenImage from "../assets/broken.jpg";

function MovieCard({ movie,onViewDetails }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">

      <div className="movie-card">

        <div className="movie-image">

          <img
            src={
              movie.Poster && movie.Poster !== "N/A"
                ? movie.Poster
                : brokenImage
            }
            alt={movie.Title}
          />

          <span className="movie-type">
            {movie.Type}
          </span>

        </div>

        <div className="movie-content">

          <h4>{movie.Title}</h4>

          <p className="movie-year">
            <i className="bi bi-calendar-event"></i>
            {" "}
            {movie.Year}
          </p>

          <button className="btn movie-btn"  onClick={() => onViewDetails(movie.imdbID)}>
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}

export default MovieCard;
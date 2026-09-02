function MoviePoster({ poster, title }) {
  return (
    <img
      src={poster}
      alt={title}
      className="img-fluid rounded shadow-lg"
    />
  );
}

export default MoviePoster;
function MovieRatings({ ratings }) {
  return (
    <>
      <h4 className="mb-3 text-primary">Ratings</h4>

      {ratings.map((rating) => (

        <div
          key={rating.Source}
          className=" text-secondary d-flex justify-content-between border-bottom py-2 "
        >
          <span>{rating.Source}</span>

          <strong>{rating.Value}</strong>
        </div>

      ))}
    </>
  );
}

export default MovieRatings;
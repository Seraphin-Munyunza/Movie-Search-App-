import React from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-2">
      {movies.map((item) => (
        <div className="col" key={item.imdbID}> 
          <MovieCard movie={item} />
        </div>
      ))}
    </div>
  );
}

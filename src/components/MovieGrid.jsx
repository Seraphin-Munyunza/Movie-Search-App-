import React from "react";
import { MovieCard } from "./MovieCard";

export function MovieGrid({ movies }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "30px", margin: "20px 0" }}>
      {movies.map((item) => (
        <MovieCard key={item.id} movie={item} />
      ))}
    </div>
  );
}

import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="card h-100 shadow-sm">
      
      <img 
        src={movie.Poster !== "N/A" ? movie.Poster : "https://placeholder.com"} 
        alt={movie.Title} 
        className="card-img-top" 
        style={{ height: "360px", objectFit: "cover" }} 
      />
      <div className="card-body">
        {/* ADJUSTMENT: Changed movie.title to movie.Title */}
        <h5 className="card-title text-truncate">{movie.Title}</h5>
        {/* ADJUSTMENT: Changed movie.year to movie.Year */}
        <p className="card-text"><small className="text-muted">🗓️ {movie.Year}</small></p>
      </div>
    </div>
  );
}

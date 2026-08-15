import React from "react";

export function MovieCard({ movie }) {
  return (
    <div style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", border: "1px solid #e9ecef" }}>
      <img src={movie.poster} alt={movie.title} style={{ width: "100%", height: "360px", objectFit: "cover" }} />
      <div style={{ padding: "20px" }}>
        <h3 style={{ fontSize: "1.1rem", margin: "0 0 10px 0", color: "#212529", fontWeight: "600", height: "2.4em", overflow: "hidden" }}>{movie.title}</h3>
        <span style={{ fontSize: "0.85rem", backgroundColor: "#e9ecef", padding: "4px 10px", borderRadius: "20px", color: "#495057", fontWeight: "500" }}>🗓️ {movie.year}</span>
      </div>
    </div>
  );
}

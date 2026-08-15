import React, { useState } from "react";

export function SearchBar({ onSearchSubmit }) {
  const [localInput, setLocalInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localInput.trim() !== "") {
      onSearchSubmit(localInput.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "40px" }}>
      <input type="text" value={localInput} onChange={(e) => setLocalInput(e.target.value)} placeholder="Type a movie title..." style={{ padding: "12px 20px", width: "100%", maxWidth: "500px", fontSize: "16px", border: "2px solid #dee2e6", borderRadius: "30px", outline: "none" }} />
      <button type="submit" style={{ padding: "12px 28px", fontSize: "16px", backgroundColor: "#212529", color: "#fff", border: "none", borderRadius: "30px", cursor: "pointer", fontWeight: "600" }}>Search</button>
    </form>
  );
}

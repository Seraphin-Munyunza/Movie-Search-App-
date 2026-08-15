import React, { useState } from "react";


export default function SearchBar({ onSearch }) {
  const [localInput, setLocalInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localInput.trim() !== "") {
      onSearch(localInput.trim()); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center gap-2 mb-4">
      <input 
        type="text" 
        value={localInput} 
        onChange={(e) => setLocalInput(e.target.value)} 
        placeholder="Type a movie title..." 
        className="form-control"
        style={{ maxWidth: "500px" }}
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}

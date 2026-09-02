import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);

    setQuery("");
  };

  return (
    <form
      className="d-flex"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="search-btn">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
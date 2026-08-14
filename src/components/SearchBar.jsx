function SearchBar({ onSearch }) {
  return (
    <button
      className="btn btn-primary mb-3"
      onClick={() => onSearch("brand new day")}
    >
      Search Batman
    </button>
  );
}

export default SearchBar;
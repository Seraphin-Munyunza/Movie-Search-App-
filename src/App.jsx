import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import Pagination from "./components/Pagination";
import Navbar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails/MovieDetail"

import './styles/App.css';

const API_KEY = "59ffe773";

function App() {
  // ==========================
  // STATE
  // ==========================
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // ==========================
  // FETCH MOVIES
  // ==========================
  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchTerm.trim()) return;

      setLoading(true);
      setError("");

      // await new Promise(resolve => setTimeout(resolve, 10000));

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`
        );

        const data = await response.json();
        console.log(data);

        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalResults(Number(data.totalResults));
        } else {
          setMovies([]);
          setTotalResults(0);
          setError(data.Error);
        }
      } catch (error) {
        setError(`Something went wrong while fetching movies.${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm, page]);

  // ==========================
  // SEARCH
  // ==========================
  const handleSearch = (newSearch) => {
    setSearchTerm(newSearch);
    setPage(1);
  };

  // ==========================
  // PAGINATION
  // ==========================
  const handlePageStep = (direction) => {
    const totalPages = Math.ceil(totalResults / 10);

    if (direction === "next" && page < totalPages) {
      setPage((prev) => prev + 1);
    }

    if (direction === "previous" && page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  // ==========================
  // UI
  // ==========================
  return (
    <div className="container bg-success-subtle py-4 bg">
      <Navbar onSearch={handleSearch} />
      <h1 className="text-center mb-4">
        Movie Search App
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary"></div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}

      {!loading && !error && (selectedMovie ? (
          <MovieDetails imdbID={selectedMovie} onBack={() => setSelectedMovie(null)}/>
        ) : (
          <MovieGrid movies={movies} onViewDetails={setSelectedMovie}/>
        )
      )}

      <Pagination
        page={page}
        totalResults={totalResults}
        onPageStep={handlePageStep}
      />

    </div>
  );
}

export default App;
import { useEffect, useState } from "react";

const API_KEY = "59ffe773";

export default function useMovieDetails(id) {
  const [movie, setMovie] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );

        const data = await response.json();

        if (data.Response === "True") {

          setMovie(data);

        } else {

          setError(data.Error);

        }

      } catch {

        setError("Something went wrong.");

      } finally {

        setLoading(false);

      }
    }

    fetchMovie();

  }, [id]);

  return { movie, loading, error };
}

/*
testing each component that is working 
2-

*/ 
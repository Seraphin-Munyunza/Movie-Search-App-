import useMovieDetails from "./useMovieDetails";

import BackButton from "./BackButton";
import MoviePoster from "./MoviePoster";
import MovieHeader from "./MovieHeader";
import MovieMeta from "./MovieMeta";
import MoviePlot from "./MoviePlot";
import MovieRatings from "./MovieRatings";
import MovieInfo from "./MovieInfo";

import "./MovieDetails.css";

function MovieDetails({ imdbID, onBack }) {

    const { movie, loading, error } = useMovieDetails(imdbID);

    if (loading)
        return <h2 className="text-center mt-5">Loading...</h2>;

    if (error)
        return <h2>{error}</h2>;

    return (

        <div className="container py-5">

            <BackButton onBack={onBack} />

            <div className="row align-items-start">

                <div className="col-lg-4">

                    <MoviePoster
                        poster={movie.Poster}
                        title={movie.Title}
                    />

                </div>

                <div className="col-lg-8">

                    <MovieHeader movie={movie} />

                    <MovieMeta movie={movie} />

                    <MoviePlot plot={movie.Plot} />

                    <MovieInfo movie={movie} />

                    <MovieRatings ratings={movie.Ratings} />

                </div>

            </div>

        </div>

    );
}

export default MovieDetails;
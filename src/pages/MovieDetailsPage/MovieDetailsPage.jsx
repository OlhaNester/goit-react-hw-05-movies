import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/moviesApi";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movie, setMovie } = useState(null);
  useEffect(() => {
    async function fetchMovie() {
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
        console.log(movie);
      } catch (error) {}
    }
    fetchMovie();
  }, [movieId]);
  return (
    <>
      <h1>Details Movie {movieId}</h1>
      {movie && <MovieDetails movie={movie} />}
    </>
  );
};

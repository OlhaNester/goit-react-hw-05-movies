import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { getMovieById } from "../../services/moviesApi";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
//import Cast from "../Cast/Cast";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log("это ИД фильма");
  console.log(movieId);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movie = await getMovieById(movieId);

        setMovie(movie);
      } catch (error) {
        toast.error("Movie is not found");
      }
    }
    fetchMovie();
  }, [movieId]);
  return (
    <>
      <Link to="/">
        <FaArrowLeft />
        To list of movies
      </Link>
      <h1>Details Movie {movieId}</h1>
      {movie && <MovieDetails movie={movie} />}
      <Toaster />
    </>
  );
};

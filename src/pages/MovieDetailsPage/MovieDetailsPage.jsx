import { useState, useEffect } from "react";
import { useParams, Link, Outlet,  } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from '../../components/Loader/Loader';

import { getMovieById } from "../../services/moviesApi";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import {BackLink} from '../../components/BackLink/BackLink';



export const MovieDetailsPage = () => {
  const { movieId } = useParams();
   const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
 


  useEffect(() => {
    setLoading(true);
    async function fetchMovie() {
      try {
        const movie = await getMovieById(movieId);

        setMovie(movie);
      } catch (error) {
        toast.error("Movie is not found");
      } finally {setLoading(false)};
    }
    fetchMovie(movieId);
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {!loading && <BackLink />}
      
      
      {movie && <MovieDetails movie={movie}  />}
      <Toaster />
      <Outlet/>
    </>
  );
};


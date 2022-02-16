import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//import Axios from 'axios';
import Loader from "../../components/Loader/Loader";
import MoviesList from '../../components/MoviesList/MoviesList';
import { getTopMovies } from "../../services/moviesApi";

const useFetchTopMovies = () => {
  // кастомный юзэффект
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

   useEffect(() => {
    async function forFetch() {
      setLoading(true);
      try {
        const topMovies = await getTopMovies();
        setTopMovies(topMovies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    forFetch();
  }, []);

  return { topMovies, loading, error };
};

export const HomePage = () => {
  const { topMovies, loading, error } = useFetchTopMovies(); //вызов кастомного хука, чтобы получить topMovies, loading
  const location = useLocation();
  return (
    <div>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {!error && (
        <MoviesList movies={topMovies} location={location }/>
      )}
    </div>
  );
};

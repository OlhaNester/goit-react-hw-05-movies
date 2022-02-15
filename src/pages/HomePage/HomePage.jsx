import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
//import Axios from 'axios';
import Loader from "../../components/Loader/Loader";
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
        <ul>
          {topMovies.map((movie) => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

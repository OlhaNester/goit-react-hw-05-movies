import { useState, useEffect } from "react";

import { Link,useLocation } from "react-router-dom";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { getMovieByTitle } from '../../services/moviesApi';



export const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const location = useLocation();

  const fetchMovie = () => {
    setLoading(true);
    async function forFetch() {
      try {
        const { results, total_results } = await getMovieByTitle(query, page);
                setMovies((prevState) => [...prevState, ...results]);
        setPage((prevState) => prevState + 1);
        setTotal(total_results);
        console.log(total_results);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    forFetch();
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMovie();
  }, [query]);

  const handleFormSubmit = (value) => {
    if (value === query) return;
    setQuery(value);
        setPage(1);
    setMovies([]);
    setLoading(true);
  };

  return (
    <>
      <Searchbar propSubmit={handleFormSubmit} />
      {!error && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {" "}
              <Link to={`${movie.id}`} state={{from: location}}>{movie.title}</Link>{" "}
            </li>
          ))}
        </ul>
      )}
      <button type="button" onClick={() => fetchMovie()}>
        more
      </button>
    </>
  );
};

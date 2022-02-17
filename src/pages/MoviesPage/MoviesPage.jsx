import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useLocation, useSearchParams } from "react-router-dom";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { getMovieByTitle } from "../../services/moviesApi";
import {MoviesList} from "../../components/MoviesList";
import Loader from "../../components/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(Number(searchParams.get("page")));
  const [total, setTotal] = useState(0);

  const location = useLocation();

  const fetchMovie = () => {
    setLoading(true);
    async function forFetch() {
      try {
        const { results } = await getMovieByTitle(query, page);
        setMovies((prevState) => [...prevState, ...results]);
        setPage((prevState) => prevState + 1);
        setSearchParams({ query: query, page: page });
        setTotal(total);

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

    setSearchParams({ query: query, page: page });

    setMovies([]);
    setLoading(true);
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <Searchbar propSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {!error && <MoviesList movies={movies} location={location} />}
      {/* <button type="button" onClick={() => fetchMovie()}>
        more
      </button> */}
    </>
  );
};

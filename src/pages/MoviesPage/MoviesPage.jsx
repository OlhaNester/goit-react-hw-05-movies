import { useState, useEffect } from "react";

import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { getMovieByTitle } from "../../services/moviesApi";
import MoviePreview from "../../components/MoviePreview/MoviePreview";
import Loader from "../../components/Loader/Loader";

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
        const { results, total_results } = await getMovieByTitle(query, page);
        setMovies((prevState) => [...prevState, ...results]);
        setPage((prevState) => prevState + 1);
        setSearchParams({ query: query, page: page });
        setTotal(total_results);

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
    console.log(location);
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
      <Searchbar propSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {!error && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
              <MoviePreview movie={ movie}/>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {/* <button type="button" onClick={() => fetchMovie()}>
        more
      </button> */}
    </>
  );
};

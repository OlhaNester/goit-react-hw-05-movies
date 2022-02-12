import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import { Searchbar } from "../../components/Searchbar/Searchbar";
//import { getMovieByTitle } from '../../services/moviesApi';

const getMovieByTitle = async (query, page) => {
  const response = await Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  // console.log("это лог из феча");
  // console.log(response.data);
  return response.data;
};

export const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchMovie = () => {
    setLoading(true);
    async function forFetch() {
      try {
        const { results, total_results } = await getMovieByTitle(query, page);
        console.log("это фильмы по имени");
        console.log(results);
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
    console.log(value);
    setPage(1);
    setMovies([]);
    setLoading(true);
  };

  return (
    <>
      <h1>Reseaerch movie</h1>
      <Searchbar propSubmit={handleFormSubmit} />
      {!error && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {" "}
              <Link to={`${movie.id}`}>{movie.title}</Link>{" "}
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

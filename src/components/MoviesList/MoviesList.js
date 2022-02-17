import { Link } from "react-router-dom";
import {MoviePreview} from "../MoviePreview";
import { MoviesContainer } from "./MoviesList.styled";
import PropTypes from 'prop-types';

export const MoviesList = ({ movies, location }) => {
  return (
    <MoviesContainer>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <MoviePreview movie={movie} />
          </Link>
        </li>
      ))}
    </MoviesContainer>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};

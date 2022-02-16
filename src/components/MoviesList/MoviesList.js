import { Link } from "react-router-dom";
import MoviePreview from "../../components/MoviePreview/MoviePreview";
import { MoviesContainer } from "./MoviesList.styled";

const MoviesList = ({ movies, location }) => {
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

export default MoviesList;

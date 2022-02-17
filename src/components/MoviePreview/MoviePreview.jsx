import defaultMovie from "../../components/defaultMovie.jpg";
import { Thumb, MovieCard } from "./MoviePreview.styled";
import PropTypes from "prop-types";

export const MoviePreview = ({ movie }) => {
  const { poster_path, title, vote_average } = movie;
  return (
    <MovieCard>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185${poster_path}`}
          width="200"
          alt=""
        />
      ) : (
        <Thumb>
          <img src={defaultMovie} width="200" alt="" />
        </Thumb>
      )}
      <p>{title}</p>
      <p>{vote_average}</p>
    </MovieCard>
  );
};

MoviePreview.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

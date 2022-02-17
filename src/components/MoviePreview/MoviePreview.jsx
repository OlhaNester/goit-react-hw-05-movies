import defaultMovie from "../../components/defaultMovie.jpg";
import { Thumb } from './MoviePreview.styled';
import PropTypes from 'prop-types';


export const MoviePreview = ({ movie }) => {
    const { poster_path, title, vote_average } = movie;
  return (
    <div>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185${poster_path}`}
          width="200"
          alt=""
        />
      ) : (
        <Thumb ><img src={defaultMovie} width="200" alt="" /></Thumb>
      )}
      <h5>{title}</h5>
      <p>{vote_average}</p>
    </div>
  );
};

MoviePreview.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  })
};
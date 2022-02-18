import { useLocation } from "react-router-dom";
import { NavLink, MovieContainer, InfoContainer } from "./MovieDetails.styled";
import defaultMovie from "../../components/defaultMovie.jpg";
import PropTypes from 'prop-types';

const MovieDetails = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } = movie;
  const location = useLocation();

  const linkPoster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <MovieContainer>
      {poster_path ? (<img src={linkPoster} width="300" alt="" />): (<img src={defaultMovie} width="300" alt="" />)}
      <InfoContainer>
        <h2>{title}</h2>
        <span>{release_date.slice(0, 4)}</span>
        <div>User Score: {vote_average} %</div>
        <div>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <div></div>
        <h3>Additional infomation</h3>
        <NavLink to={`cast`} state={{ from: location?.state?.from }}>
          Cast
        </NavLink>
        
        <NavLink to={`reviews`} state={{ from: location?.state?.from }}>
          Review
        </NavLink>
      </InfoContainer>
    </MovieContainer>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path:  PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }))
  }),
};
export default MovieDetails;

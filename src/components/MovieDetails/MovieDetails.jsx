import { Link, useLocation } from "react-router-dom";
import { MovieContainer, InfoContainer } from './MovieDetails.styled';

const MovieDetails = ({ movie }) => {
  const location = useLocation();
  

  const linkPoster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <MovieContainer>
     
      <img src={linkPoster} width="300" alt="" />
      <InfoContainer><h2>{movie.title}</h2>
      <span>{movie.release_date.slice(0, 4)}</span>
      <div>User Score: {movie.vote_average} %</div>
      <div>
        <h4>Overview</h4>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div></div>
        <h3>Additional infomation</h3>
        <Link to={`cast`} state={{ from: location.state.from }}>
          Cast
        </Link>
        <br />
        <Link to={`reviews`} state={{ from: location.state.from }}>
          Review
        </Link>
      </InfoContainer>
    </MovieContainer>
  );
};
export default MovieDetails;

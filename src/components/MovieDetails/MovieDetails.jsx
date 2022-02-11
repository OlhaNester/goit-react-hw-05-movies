//import { linkPoster } from "../Poster/Poster";

const MovieDetails = ({ movie }) => {
  const linkPoster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  return (
    <>
      <button type="button"></button>
     <img src={linkPoster} width= "300" alt=""/>;
      <h2>{movie.title}</h2>
      <div>{movie.release_date.slice(0, 4)}</div>
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
    </>
  );
};
export default MovieDetails;
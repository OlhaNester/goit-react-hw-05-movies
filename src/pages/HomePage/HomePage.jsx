import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import Axios from 'axios';
import Loader from '../../components/Loader/Loader';
import {getTopMovies} from '../../services/moviesApi';

const useFetchTopMovies = () => {// кастомный юзэффект
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

//   const getTopMovies = async () => {
//     const response = await Axios.get(`
// https://api.themoviedb.org/3/trending/movie/day?api_key=ee059677e8bdbcfa281a4ce6304abcdd`);
//     return response.data.results;
//   };

  useEffect(() => {
    async function forFetch() {
      setLoading(true);
      try {
        const topMovies = await getTopMovies();
        setTopMovies(topMovies);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    forFetch();
    
  }, []);

  return { topMovies, loading, error };
};


export const HomePage = () => {
  
  const { topMovies, loading, error } = useFetchTopMovies(); //вызов кастомного хука, чтобы получить topMovies, loading
  
  return <div><h1>Trending today</h1>
  {loading && <Loader/>}
 {!error && <ul>
      {topMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>
      {movie.title}</Link> </li>))}
 </ul>}
</div>;
};

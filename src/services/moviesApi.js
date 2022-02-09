
import Axios from 'axios';

//const apiKey = ee059677e8bdbcfa281a4ce6304abcdd;

export const getTopMovies = async()=> {
    const response = await Axios.get(`
https://api.themoviedb.org/3/trending/movie/day?api_key=ee059677e8bdbcfa281a4ce6304abcdd`);
    return response.data.results;
};
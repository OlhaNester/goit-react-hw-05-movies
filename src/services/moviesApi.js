import Axios from "axios";

//const apiKey = ee059677e8bdbcfa281a4ce6304abcdd;

export const getTopMovies = async () => {
  const response = await Axios.get(`
https://api.themoviedb.org/3/trending/movie/day?api_key=ee059677e8bdbcfa281a4ce6304abcdd`);
  return response.data.results;
};

export const getMovieById = async (id) => {
  const response =
    await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US
    `);
  return response.data;
};

export const getPoster = async () => {
    const response = await Axios.get(`
    https://api.themoviedb.org/3/configuration?api_key=ee059677e8bdbcfa281a4ce6304abcdd`);
    return response.data.images;
};

export const getMovieByTitle = async (query, page) => {
  const response = await Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
    return response.data;
};

export const getReviews = async (movieId) => {
  const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US&page=1`);
  console.log(response);
  return response.data.results;
    
};

 export const getCast = async (movieId) => {
     const response =
         await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US`)
        return response.data.cast;
};
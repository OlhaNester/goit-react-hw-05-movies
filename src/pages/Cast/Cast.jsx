import { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import Axios from 'axios';


 const getCast = async (movieId) => {
    const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=ee059677e8bdbcfa281a4ce6304abcdd>>&language=en-US`)
     console.log("это лог из фечаCast");
     console.log(response.data);
    return response.data;
};


export const Cast = (movieId) => {
    //const movieId = useParams();
    //console.log(Number(movieId));
    const [cast, setCast] = useState(null);
    const [error, setError] = useState(null);

   
    useEffect(() => {
       async function ForFetch() {
            try {
                const { cast } = await getCast(movieId);
                setCast(cast);
            } catch (error) {
                setError(error);
            }
        } ForFetch();
    }, [movieId]);

    return (
        <>
            {!error && <ul>
                {cast.map(item =>
                (<li key={item.id}>
                    {item.original_name} </li>))}</ul>}
        </>
    )

};
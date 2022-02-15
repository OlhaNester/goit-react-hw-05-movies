import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {getCast} from '../../services/moviesApi';


export const Cast = () => {
    const {movieId} = useParams();
        const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();
    console.log("cast");
    console.log(location);
    
   
    useEffect(() => {
        
       async function FetchCast() {
            try {
                const  cast  = await getCast(movieId);
                setCast(cast);
            } catch (error) {
                setError(error);
            }
        }
        FetchCast();
    }, [movieId]);

    return (
        <>
            {cast.length > 0 ? (<ul>
                {cast.map(item =>
                (<li key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
                  width="150"
                  alt="" />
                    <p>{item.original_name}</p>
                <p>{item.character}</p></li>))}</ul>) :(<p>"We don't have any information"</p>) }
        </>
    )

};
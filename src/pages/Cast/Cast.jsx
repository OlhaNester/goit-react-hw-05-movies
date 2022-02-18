import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from '../../services/moviesApi';
import { CastList, Thumb } from '../Cast/Cast.styled';
import {  toast } from "react-toastify";
import  defaultCast  from '../../components/defaultCast.png';


export const Cast = () => {
    const {movieId} = useParams();
        const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
  
   
    
   
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
            
            {error && toast.error("Something wrong")}
            {cast.length > 0 ? (
                <CastList>
                {cast.map(item =>
                (<li key={item.id}>
                    {item.profile_path ? (<img src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
                  width="150"
                  alt="" />):(<Thumb ><img
                  src={defaultCast}
                  width="150"
                  alt=""
                /></Thumb>) }
                    <p>{item.original_name}</p>
                <p>{item.character}</p></li>))}</CastList>) :(<p>"We don't have any information"</p>) }
        </>
    )

};

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getReviews} from '../../services/moviesApi';



export const Reviews = () => {
    const {movieId} = useParams();
    console.log("Reviews");
    console.log(movieId);
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const reviews = await getReviews(movieId);
                setReviews(reviews);
            } catch (error) {
                setError(error);
                
            }
        } fetchReviews();
    }, [movieId]);

    return (
        <>
            {reviews.length > 0 ? (<ul>{reviews.map(review =>
                <li key={review.id}>{review.content}
                </li>)}</ul>) : (<p>"We don't have any reviews for this movie"</p>)}
          
        
        </>
    );



};
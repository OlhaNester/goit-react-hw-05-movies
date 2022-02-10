import {useState, useEffect} from 'react';
import toast from 'react-hot-toast';
import { getMovieByTitle } from '../../services/moviesApi';

export const MoviesPage = ({propSubmit}) => {
    const [value, setValue] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        const { value } = event.currentTarget;
        setValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value.trim() === "") {
            toast.error("Enter query!");
            return;
        }
        propSubmit(value);
        setValue('');
    };

    useEffect(() => {
        async function forFetch() {
            try { 
                const movies = await getMovieByTitle(value);
                setMovies(movies);
                console.log(movies)
            } catch (error) {
                setError(error);
            }
        } forFetch();
    }, [value])
  

    return (
        <>
            <h1>Reseaerch movie</h1>
                    <form onSubmit={handleSubmit}>
             <button type="submit"></button>
                <input
                    onChange={handleChange}
                 type="text"
                 autoComplete = "off"
                    autoFocus
                    placeholder ="Search movie"
                    value={value}
                    
                />
            </form>
        </>
    )
};
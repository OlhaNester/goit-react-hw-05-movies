import { useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
    const ppp = useParams();
    console.log(ppp);
    return <h1>Details Movie</h1>
};

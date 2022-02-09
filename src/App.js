import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieDetailsPage } from './pages/MovieDetailsPage/MovieDetailsPage';
import {MoviesPage} from './pages/MoviePage/MoviePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage/>}></Route>
            {/* <Route path="/cast" element={<Cast />}/>
            <Route path="/reviews" element={<Reviews />}/> */}
          <Route path="*" element={<Navigate to="/"/>}/>
        
      </Route>
    </Routes>
  );
}

export default App;

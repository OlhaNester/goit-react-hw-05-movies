import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="movies" element={<div> MoviesPage</div>}></Route>
        <Route path="movies/:movieId" element={<div>MovieDetailsPage</div>}></Route>
            {/* <Route path="/cast" element={<Cast />}/>
            <Route path="/reviews" element={<Reviews />}/> */}
          
        
      </Route>
    </Routes>
  );
}

export default App;

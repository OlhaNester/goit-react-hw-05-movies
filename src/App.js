import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomePage } from "pages";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div> HomePage</div>} />
        <Route path="movies" element={<div> MoviePage</div>}>
          <Route path=":movieId" element={<div>MovieDetalpage</div>}>
            {/* <Route path="/cast" element={<Cast />}/>
            <Route path="/reviews" element={<Reviews />}/> */}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

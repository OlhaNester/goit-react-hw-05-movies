import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { AppContainer } from "./App.styled";
import Layout from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";
import { Cast } from "./pages/Cast/Cast";
import { Reviews } from "./pages/Reviews/Reviews";

function App() {
  <GlobalStyle />;
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;

import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { AppContainer } from "./App.styled";
// import {Layout} from "./pages/Layout";
// import  {HomePage}  from "./pages/HomePage";
// import  {MovieDetailsPage}  from "./pages/MovieDetailsPage";
// import  {MoviesPage} from "./pages/MoviesPage";
import  {Cast}  from "./pages/Cast";
import { Reviews } from "./pages/Reviews";
import 'react-toastify/dist/ReactToastify.css';


const loader = componentName => {
  return lazy(() =>
    import(`./pages/${componentName}/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};
 const Layout = loader("Layout");
 const HomePage = loader("HomePage");
 const MoviesPage = loader("MoviesPage");
 const MovieDetailsPage = loader("MovieDetailsPage");

function App() {
  <GlobalStyle />;
  return (
    <AppContainer>
      <Suspense fallback="">
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
      </Suspense>
    </AppContainer>
  );
}

export default App;

import { Routes, Route, Link, Outlet } from "react-router-dom";
import {Layout} from './components/Layout/Layout';
;


function App() {
  return (
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="movies" element={<MoviesPage />} >
          <Route path="/:movieId" element={<MovieDetailsPage />}>
            <Route path="/cast" element={<Cast />}/>
            <Route path="/reviews" element={<Reviews />}/>
          </Route>
        </Route>
        </Route>
        
      </Routes>
    
  );
}


function HomePage() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Outlet/>
    </>
  );
}

function MoviesPage() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
        <Outlet/>
    </>
  );
}

function MovieDetailsPage() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Outlet/>
    </>
  );
}
export default App;

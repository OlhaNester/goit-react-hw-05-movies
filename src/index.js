import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';


//import App from './App.js';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={'/goit-react-hw-05-movies/'}>
      <Routes>
        
      <Route path="/" element={<Layout />}>
        <Route index element={<div> HomePage</div>}/>
        <Route path="movies" element={<div> MoviePage</div>} >
          <Route path=":movieId" element={<div>MovieDetalpage</div>}>
            {/* <Route path="/cast" element={<Cast />}/>
            <Route path="/reviews" element={<Reviews />}/> */}
          </Route>
        </Route>
        </Route>
        </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);



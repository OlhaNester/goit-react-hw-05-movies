import { Routes, Route  } from "react-router-dom";
import { Layout } from './components/Layout/Layout';


function App() {
  return (
    
    
      <Routes>
        
      <Route path="/" element={<Layout />}>
        <Route index path="home" element={<div> HomePage</div>}></Route>
        <Route path="movies" element={<div> MoviePage</div>} >
          <Route path=":movieId" element={<div> MovieDetail</div>} ></Route>
        </Route>
      </Route>
        
        
      </Routes>
      
    
    
  );
};



export default App;

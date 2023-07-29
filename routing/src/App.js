import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contect from './components/pages/Contect';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Error from './components/pages/Error';
import Mainheader from './components/pages/Mainheader';


function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contect" element={<Contect/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes> */}


      {/* nested routing */}
      {/* path ke andar path */}
      <Routes>      
        <Route  path="/" element={<Mainheader/>}>
          <Route  index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contect" element={<Contect/>}/>
          <Route path="/service" element={<Services/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

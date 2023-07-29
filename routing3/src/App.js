import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contect from './components/pages/Contect';
import Navbar from './components/Navbar';
import Post from './components/pages/Post';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';

function App() {
  let isLogged = false
  // let data ={
  //   "st":"User Not Logged in", 
  // }
  let data = {
    'st':'User not logged in'
  }
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contect' element={<Contect/>}/>
          {/* dynamic url */}
          <Route path='/post/:category' element={<Post/>}/>
          <Route path='/post/:category/:id' element={<Post/>}/>

          {/* conditionally rendring */}
          <Route path='/dashboard' element={isLogged ? <Dashboard/> : <Navigate to="/login" state={data}/>}/>
          <Route path='/login' element={<Login/>}  replace  />

          <Route path='/*' element={<h1>404 page Not Found</h1>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

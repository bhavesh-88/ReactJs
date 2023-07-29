import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components2/pages/About';
import Home from './components2/pages/Home';
import Contect from './components2/pages/Contect';
import Post from './components2/pages/Post';
import Layout from './components2/Layout';
import PostLayout from './components2/pages/PostLayout';
import Postdetail from './components2/pages/Postdetail';

function App2() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                {/* <Route path='/' element={<Home/>}/> */}
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contect' element={<Contect/>}/>
                {/* <Route path='post' element={<Post/>}/> */}

                <Route path='post' element={<PostLayout/>}>
                    <Route index element={<Post/>}/>
                    <Route path=':category' element={<Postdetail/>}/>
                </Route>
            </Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App2;

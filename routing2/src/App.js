import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contect from './pages/Contect';
// import Error from './pages/Error';
import User from './component/user';
import Filter from './pages/Filter';
import Service from './pages/Service';

import { Routes,Route, BrowserRouter ,Navigate} from 'react-router-dom';
import Company from './pages/Company';
import Channel from './pages/Channel';
import Login from './pages/Login';
import Protected from './pages/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>

          {/* <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contect' element={<Contect/>}/> */}

          {/* protected route */}
          <Route path='/' element={<Protected Component={Home}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<Protected Component={About}/>}/>
          <Route path='/contect' element={<Contect/>}/>
          
          {/* use search[arams] */}
          <Route path='/filter' element={<Filter/>}/>
          
          {/* // add params           */}
          <Route path='/user/:name' element={<User/>}/>

          {/* // nested routing           */}
          <Route path='/service/' element={<Service/>}>
              <Route path='company' element={<Company/>}/>
              <Route path='channel' element={<Channel/>}/>
          </Route>
          

          {/* <Route path='/*' element={<Error/>}/> */}
          <Route path='/*' element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

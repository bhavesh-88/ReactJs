import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";


import { BrowserRouter ,Routes , Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;

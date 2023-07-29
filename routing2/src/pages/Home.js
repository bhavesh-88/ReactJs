import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
   const navigate = useNavigate()
  //  const navtopage = () =>{
  //   let x =true;
  //   if (x) {
  //     navigate("/about")      
  //   } else {
  //     navigate("/filter")
  //   }
  //  }
   const navtopage = (e) =>{
      navigate(e)    
   }
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is a Home Page Our Awesome WEbApp</p>
      <Link to="/about">go to About Page</Link><br/>

      {/* <button onClick={() => { navigate("/about")}}>go to About Page</button><br/> */}
      
      {/* <button onClick={() => navtopage()}>go to about Page</button><br/>
      <button onClick={() => navtopage()}>go to filter Page</button> */}

      <button onClick={() => navtopage("/about")}>go to about Page</button><br/>
      <button onClick={() => navtopage("/filter")}>go to filter Page</button>
    </div>
  )
}

export default Home

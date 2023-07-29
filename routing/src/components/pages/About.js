import React from 'react'
// import Header from '../Header'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate();
  const gotocontact = () => {
    navigate('/contact')
  };
  return (
    <>
        {/* <Header/> */}
        
        <section>
            <h1>About Page</h1> 
            <button onClick={() => gotocontact()}>go to Contact page</button>
            <button onClick={() => navigate(-1)}>go to back</button>
        </section>

    </>
  )
}

export default About

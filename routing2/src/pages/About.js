import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a About Page Our Awesome WEbApp</p>
      <Link to="/">go to Home Page</Link>

      {/* state - transfer data one  route to another route  */}

      <li><Link to="/user/anil" state={{name:"bhaesh",age:22}}>Anil</Link></li>
      <li><Link to="/user/bhavesh">Bhavesh</Link></li>

    </div>
  )
}

export default About

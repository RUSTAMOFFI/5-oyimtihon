import React from 'react'
import './sass/home.scss'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="container">
    <div className="navabar">
      <div className="nav">
      <Link to="/"><h1>Jobify</h1></Link>
        
        
        <div className="links">
          <Link to="/login">Explore</Link>
          <Link to="/home">Register</Link>
          <Link to="/myjobs">Login</Link>
        </div>
      </div>
    </div>
    <div className="header">
      <h1>Find the <span>best </span> opportunities with <span>us</span>
         </h1>
      <p id='rem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur fugiat architecto nostrum deleniti qui in modi sit eaque illo unde magnam sed similique rem placeat, totam itaque alias sunt.</p>
      <div className="btt">
      <Link to="/register">

      <button>Register</button>
      </Link>

      <Link to="/login">
      <button className='btn'>Login</button>
      </Link>

      </div>
    </div>
  </div>
  )
}

export default Home

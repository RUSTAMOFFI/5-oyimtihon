import React from 'react'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'
import './sass/expore.scss'
const Explore = () => {
  return (
    <div>
      <Dashboard/>
 <div className='container'>
    <div className='sect'>
      <h1>Hello,</h1>
      <p>You have not created an profile yet.</p>
      <Link to="/create">
      <button>Create Profile</button>
      </Link>
     
    </div>
    </div>
    </div>
  )
}

export default Explore

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "../sass/login.scss"
// import{initials}
const Login = () => {
  const {email,setEmail}=useState()
  useEffect(({
    
  }),[])
  return (
    <div className='fors'>
      <form id='form'>
        <h1>Login</h1>
        <div className='inp'>
          <label htmlFor="email">Your email</label>
        <input type="email" id='email' />
        </div>
<div className='inp'>
  <label htmlFor="tel">Your password</label>
        <input type="tel"id='tel' />
</div>

        <button>Login</button>
        <li>
        <p>No account yet?</p> 
        <Link to="/register">Register</Link>
        </li>
      </form>
    </div>
  )
}
export default Login

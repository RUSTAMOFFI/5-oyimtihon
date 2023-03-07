import React from 'react'
import Dashboard from './Dashboard'
import "./sass/myjob.scss"
const Myjobs = () => {
  return (
    <div>
        <Dashboard/>
        <div className="cont">

<div className="my">
  <h1>Do you want to create a job opportunities?</h1>
  <p>Enter necessary details and submit</p>
  <label htmlFor="job" >Job title</label>
  <input type="text" id='job' placeholder='Serior react devoloper' />
  <label htmlFor="jobd">Job description</label>
<textarea name="" id="jobd" placeholder='Tell us a little bit about your self'></textarea>
<button>Create</button>
<p className='hi'>Jobs you posted</p>
</div>
    </div>
        </div>
  )
}

export default Myjobs

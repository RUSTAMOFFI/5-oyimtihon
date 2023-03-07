import React from 'react'
import Dashboard from './Dashboard'
import "./sass/addb.scss"
import { Link } from 'react-router-dom'
const Addb = () => {
  return (
    <div>
    <Dashboard />
    <div className="mirage">
        <Link to="/enddashboard">
            
      <button>Go back</button>
        </Link>
      <h1 className="hb">Add Education</h1>
      <div className="work">
        <form id="inps">
          <div className="inpss">
            <label id="lb" htmlFor="Company">
              School
            </label>
            <input type="text" id="Company" placeholder="Stanford" />
          </div>
          <div className="inpss">
            <label id="lb" htmlFor="Location">
            Degree
            </label>
            <input
              type="text"
              id="Location"
              placeholder="Master"
            />
          </div>
          <div className="inpss">
            <label htmlFor="Github">Date</label>
            <div className="eesp">
              <input
                type="date"
                id="Github"
              />
              <div className="dir">To</div>
              <input
                type="date"
                id="Github"
                
              />
            </div>
            <div className="sss">
              <input type="checkbox" /> <p>current</p>
            </div>
          </div>
          <div className="inpss">
            <label htmlFor="Website">
Field of study</label>
            <input
              type="text"
              id="Website"
              placeholder="Computer Sience"
            />
          </div>
          <div className="aab">
            <label htmlFor="Bio" id="bos">
              Description
            </label>
            <textarea
              id="Bio"
              placeholder=""
            />
          </div>
          <Link to="/enddashboard">
            <button className="cr">Create</button>
          </Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Addb

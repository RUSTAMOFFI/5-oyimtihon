import React from "react";
import "./sass/adda.scss";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
const Adda = () => {
  return (
    <div>
      <Dashboard />
      <div className="mirage">
      <Link to="/enddashboard">
            
        <button>Go back</button>
            </Link>
        <h1 className="hb">Add Experience</h1>
        <div className="work">
          <form id="inps">
            <div className="inpss">
              <label id="lb" htmlFor="Company">
                Title
              </label>
              <input type="text" id="Company" placeholder="Senior devoloper" />
            </div>
            <div className="inpss">
              <label id="lb" htmlFor="Location">
                Company
              </label>
              <input
                type="text"
                id="Location"
                placeholder="Apple "
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
              <label htmlFor="Website">Location</label>
              <input
                type="text"
                id="Website"
                placeholder="One Apple Park Way; Cupertino, CA 95014, U.S.A."
              />
            </div>
            <div className="aab">
              <label htmlFor="Bio" id="bos">
                Description
              </label>
              <textarea
                id="Bio"
                placeholder="Tell us a little bit about your self"
              />
            </div>
            <Link to="/enddashboard">
              <button className="cr">Create</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adda;

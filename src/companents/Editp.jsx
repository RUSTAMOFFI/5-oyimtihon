import React from 'react'
import Dashboard from "./Dashboard";
import "./sass/create.scss";
import { Link } from "react-router-dom";

const Editp = () => {
  return (
    <div>
      <Dashboard />
      <div className="contar">
        <div className="ss">
          <span>* = required fields</span>
        </div>
        <div className="work">
          <form id="inps">
            <div className="inpss">
              <label  htmlFor="work">*Work Status</label>
              <input type="text" id="work" />
              <p>Select the best option that fits you</p>
            </div>
            <div className="inpss">
              <label  htmlFor="Skills">*Skills</label>
              <input type="text" id="Skills"  placeholder="HTML,CSS,JS"/>
              <p>Separate each skill with comma(,)</p>
            </div>
            <div className="inpss">
            <label id="lb" htmlFor="Company">Company</label>
              <input type="text" id="Company"placeholder="Apple Inc." />
            </div>
            <div className="inpss">
            <label id="lb" htmlFor="Location">Location</label>
              <input type="text" id="Location" placeholder="One Apple Park Way; Cupertino, CA 95014, U.S.A." />
            </div>
            <div className="inpss">
            <label  htmlFor="Website">Website</label>
              <input type="text" id="Website" placeholder="One Apple Park Way; Cupertino, CA 95014, U.S.A." />
              <p>You do not need to specify https protocol</p>
            </div>
            <div className="inpss">
            <label htmlFor="Github">Github user name</label>
              <input type="text" id="Github" placeholder="One Apple Park Way; Cupertino, CA 95014, U.S.A." />
              <p>You need to specify only username (without https://github.com)</p>
            </div>
            <div className="aab">
            <label htmlFor="Bio">Bio</label>
              <textarea id="Bio" placeholder="Tell us a little bit about your self" />
              <p>You may say about your recent experience or what you are up to.</p>
            </div>
            <Link to='/enddashboard'>
<button className="cr">Edit</button>
            </Link>
          </form>
        </div>
      </div>
      </div>
  );
};

export default Editp

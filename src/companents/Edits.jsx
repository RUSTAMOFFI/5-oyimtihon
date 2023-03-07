import React from "react";

import { Link } from "react-router-dom";
import "./sass/edits.scss"
import Dashboard from "./Dashboard";
const Edits = () => {
  return (
    <div>
      <Dashboard />
      <div className="mirage">
        <Link to="/enddashboard">
          <button>Go to dashboard </button>
        </Link>
        <h1 className="hb">Your Social Links</h1>
        <div className="work">
          <form id="inpst">
            <div className="inpss">
              <label id="lb" htmlFor="Company">
                Facebook
              </label>
              <input type="url" id="Company" />
            </div>
            <div className="inpss">
              <label id="lb" htmlFor="Location">
                Instagram
              </label>
              <input type="url" id="Location" />
            </div>
            <div className="inpss">
              <label htmlFor="Github">Twitter</label>
              <input type="url" id="Github" />
            </div>
            <div className="inpss">
              <label htmlFor="Github">You tube</label>
              <input type="url" id="Github" />
            </div>
            <div className="inpss">
              <label htmlFor="Github">Linkedin</label>
              <input type="url" id="Github" />
            </div>
            <div className="inpss">

            <Link to="/enddashboard">
              <button className="crr">Save</button>
            </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Edits;

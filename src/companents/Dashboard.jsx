import React from "react";
import "./sass/dashboard.scss";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="contar">
      <div className="navabar">
        <div className="nav">
          <Link to="/explore">
            <h1>Jobify</h1>
          </Link>

          <div className="links">
            <li>
              <Link to="/explore">Dashboard</Link>
            </li>
            <li>
              {" "}
              <Link to="/myjobs">My jobs</Link>
            </li>
            <li>
              <Link to="/exxxe">Explore</Link>
            </li>
            <Link to="/login">
              <button>Log out</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

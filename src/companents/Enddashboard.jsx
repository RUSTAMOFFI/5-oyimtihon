import React from "react";
import Dashboard from "./Dashboard";
import "./sass/enddashboard.scss";
import { Link, Navigate } from "react-router-dom";
const Enddashboard = () => {

  return (
    <div>
      <Dashboard />
      <div className="containe">
        <div className="sect">
          <h1>Hello,</h1>
          <p>What are you planning to do today?</p>
          <Link to="/myjobs">
            <button className="pj">Post a job</button>
          </Link>
          <Link to="/explore">
            <button className="exj">Explore jobs</button>
          </Link>
          <h2>Your Info</h2>
          <div className="myjobs">
            <div className="user">
              <div className="infos">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <div className="infoo">
                  <p>Email:</p>
                  <p>Status: Open to hire</p>
                  <p>Location:</p>
                  <p>Bio:</p>
                  <p>Joined at:</p>
                </div>
              </div>
              <div className="skils">
                <p>skils</p>
              </div>
              <div className="sbtns">
                <Link to="/editp">
                  <button className="exj">Edit profile</button>
                </Link>
                <Link to="/edits"> 
                  <button className="pj">Edit Socials</button>
                </Link>
              </div>
            </div>
          </div>

          <h2 id="hh">Experiences</h2>
          <div className="add">
            <h2>No Experience Added.</h2>
            <Link to="/adda">

            <button id="add">ADD</button>
            </Link>

          </div>
          <h2 id="hh">Educations</h2>
          <div className="add">
            <h2>No Education Added.</h2>
            <Link to="/addb">

            <button id="add">ADD</button>
            </Link>
          </div>
          <div className="danger">
            <span>!!!Danger Zone!!!</span>
            <p>
              This area is so dangerous. You may delete all your data by
              accident in here! PLEASE BE CAREFUL!!!
            </p>
            <Link to="/login">
              <button className="qqq" >Delate account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enddashboard;

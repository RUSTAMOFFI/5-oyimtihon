import React from "react";
import Dashboard from "./Dashboard";
import "./sass/plore.scss";
import { AiFillLike,AiOutlineDislike,AiOutlinePlus} from "react-icons/ai";
import {FaGraduationCap} from 'react-icons/fa'
const Exxxe = () => {
  return (
    <div>
      <Dashboard />
      <div className="cont">
        <h1>Find the best opportunities...</h1>
        <div className="box">
          <div className="text">
            <h2>sda</h2>
            <p>asd</p>
            <p>adfs</p>
            <p>ascd</p>
          </div>
          <div className="btns">
            <div className="plus">

            <button id="blue"><AiFillLike /></button>
            <button id="grey"><AiOutlineDislike/></button>
            <button id="green"><FaGraduationCap/></button>
            </div>
            <div className="plus">

            <button id="red"><AiOutlinePlus/>
            </button>
            </div>

              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exxxe;

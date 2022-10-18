import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import "./requestinfo.css";
import Nav from "../Nav/Nav";

const Requestinfo = () => {
  return (
    <div className="requestInfo">
      <AiOutlineBell className="bellIcon" />
      <AiFillQuestionCircle className="questionIcon" />
      <div className="contant">
        <h1 className="contant_title">New Artwork Request </h1>
      </div>
      <Nav />
    </div>
  );
};
export default Requestinfo;

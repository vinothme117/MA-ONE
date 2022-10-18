import React from "react";
import { Link } from "react-router-dom";

import { FaRegPlusSquare, FaCopy } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import {
  AiOutlineHome,
  AiOutlinePicture,
  AiOutlinePieChart,
} from "react-icons/ai";
import "./InsideSideBar.css";

const InsideSideBar = (props) => {
  return (
    <div className="sideBar">
      <div className="navi-icons">
        <img
          src="https://res.cloudinary.com/du4tzzgd7/image/upload/v1665637552/A_l6bxdm.png"
          alt="logo"
        />
        <GiHamburgerMenu className="slider" onClick={props.outside} />
      </div>
      <>
        <label className="sidebar-item">
          <AiOutlineHome className="icon" />
        </label>

        <label className="sidebar-item">
          <AiOutlinePicture className="icon" />
        </label>

        <label className="sidebar-item">
          <FaCopy className="icon" />
        </label>

        <Link className="sidebar-item">
          <GoChecklist className="icon" />
        </Link>

        <label className="sidebar-item">
          <AiOutlinePieChart className="icon" />
        </label>
        <Link to="/" className="sidebar-item">
          <FaRegPlusSquare className="icon" />
        </Link>

        <hr />
        <label className="sidebar-item">
          <MdOutlineAdminPanelSettings className="icon" />
        </label>
      </>
      <img
        className="sidebarimg"
        src="https://res.cloudinary.com/du4tzzgd7/image/upload/v1665722701/R_aec1wj.jpg"
        alt="userimg"
      />
    </div>
  );
};
export default InsideSideBar;

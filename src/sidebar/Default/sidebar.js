import React from "react";
import { Link } from "react-router-dom";
import { FaCopy, FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import {
  AiOutlinePicture,
  AiOutlinePieChart,
  AiOutlineHome,
  AiFillSetting,
} from "react-icons/ai";
import "./sidebar.css";

const DefaultSidebar = (props) => {
  const slideEvent = (event) => {
    event.preventDefault();
    props.Inside();
  };
  return (
    <div className="sideBar">
      <div className="navi-icons">
        <img
          src="https://res.cloudinary.com/du4tzzgd7/image/upload/v1665637472/A123_cdoew2.png"
          alt="logo"
        />
        <GiHamburgerMenu className="sliderButton" onClick={slideEvent} />
      </div>
      <>
        <label className="sidebar-item">
          <AiOutlineHome className="icon" />
          Inbox
        </label>

        <label className="sidebar-item">
          <AiOutlinePicture className="icon" />
          Assets
        </label>

        <label className="sidebar-item">
          <FaCopy className="icon" />
          Pack Copy
        </label>

        <label className="sidebar-item">
          <GoChecklist className="icon" />
          Specifications
        </label>

        <label className="sidebar-item">
          <AiOutlinePieChart className="icon" />
          Reporting
        </label>

        <Link to="/" className="sidebar-item">
          <FaRegPlusSquare className="icon" />
          New request
        </Link>

        <hr />
        <label className="sidebar-item">
          <MdOutlineAdminPanelSettings className="icon" />
          Admin
        </label>
      </>
      <div className="footeritem">
        <img
          className="sidebarimg"
          src="https://res.cloudinary.com/du4tzzgd7/image/upload/v1665722701/R_aec1wj.jpg"
          alt="userimg"
        />
        <div className="footer-name">
          <h2>Jane Doe</h2>
          <p>view profile</p>
        </div>
        <AiFillSetting className="footericon" />
      </div>
    </div>
  );
};

export default DefaultSidebar;

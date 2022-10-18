import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const Navicon = [
    {
      Name: " Request Info ",
      link: "/",
    },
    {
      Name: " Copy ",
    },
    {
      Name: " Specification ",
    },
    {
      Name: " Files ",
      link: "/file",
    },
    {
      Name: " Task ",
      link: "/task",
    },
    {
      Name: " Audit Log ",
      link: "/audit",
    },
    {
      Name: " comments ",
      link: "/comment",
    },
  ];
  return (
    <nav>
      {Navicon.map((data) => {
        return (
          <Link className="Nav-item" to={data.link}>
            {data.Name}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;

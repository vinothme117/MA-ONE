import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Tabledata = (props) => {
  return (
    <tr>
      <td className="data">
        <button className="updatebutton">update file</button>
        <GiHamburgerMenu className="icon" />
      </td>
      <td className="data">{props.filename}</td>
      <td className="data">{props.version}</td>
      <td className="data">{props.filetype}</td>
      <td className="data">{props.addby}</td>
      <td className="data">{props.addon}</td>
    </tr>
  );
};
export default Tabledata;

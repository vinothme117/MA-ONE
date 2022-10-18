import "./commad.css";
import { BiLike } from "react-icons/bi";

const Cmddata = (props) => {
  return (
    <>
      <div className="cmd-container">
        <img src={props.imglink} alt="userimage" className="cmdimg" />
      </div>

      <div className="command">
        <span className="username">{props.name}</span>
        <br />
        <p>{props.cmd}</p>
        <>
          <BiLike className="commandicon" />
          Reply
        </>
      </div>
    </>
  );
};
export default Cmddata;

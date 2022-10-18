import "./taskdata.css";

const Taskdata = (props) => {
  return (
    <tr>
      <td className="data">{props.taskname}</td>
      <td className="data">{props.user}</td>
      <td className="data">{props.duration}</td>
      <td className="data">
        <button className="editbtn" onClick={props.funname}>
          Edit
        </button>
      </td>
    </tr>
  );
};
export default Taskdata;

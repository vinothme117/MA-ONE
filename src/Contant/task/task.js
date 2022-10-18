import React, { useState } from "react";
import Taskdata from "./taskdata/taskdata";
import Popup from "./taskdata/popup/popup";
const Task = () => {
  const [popup, popupvalue] = useState(false);
  const unhidehandler = () => {
    popupvalue(true);
  };
  const hideHandler = () => {
    popupvalue(false);
  };
  const taskdata = [
    {
      taskname: "start",
      user: "user1",
      duration: "5",
    },
    {
      taskname: "Artwork Upload",
      user: "user2",
      duration: "1",
    },
    {
      taskname: "Artwork Approval",
      user: "user6",
      duration: "3",
    },
    {
      taskname: "print proof",
      user: "user5",
      duration: "1.5",
    },
    {
      taskname: "print proof approval",
      user: "user4",
      duration: "3.1",
    },
  ];

  return (
    <>
      {popup && <Popup hide={hideHandler} />}
      <table border="1" className="data-table">
        <tr>
          <th className="table-head">TASK NAME</th>
          <th className="table-head">USER</th>
          <th className="table-head">DURATION</th>
          <th className="table-head"></th>
        </tr>
        <tbody>
          {taskdata.map((data) => {
            return (
              <Taskdata
                taskname={data.taskname}
                user={data.user}
                duration={data.duration}
                funname={unhidehandler}
              ></Taskdata>
            );
          })}
        </tbody>
      </table>
      <div>
        <button className="footer-button">submit</button>
        <button className="footer-button">save</button>
      </div>
    </>
  );
};
export default Task;

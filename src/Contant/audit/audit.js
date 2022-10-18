import React from "react";
import Auditdata from "./auditdata";
import "./audit.css";

const Audit = () => {
  return (
    <>
      <table border="1" className="data-table">
        <tr>
          <th className="table-head">TASK NAME</th>
          <th className="table-head">TASK OWNER</th>
          <th className="table-head">DURATION</th>
          <th className="table-head">START DATE</th>
          <th className="table-head">END DATE</th>
          <th className="table-head">ACTION</th>
        </tr>
        <tbody>
          <Auditdata></Auditdata>
        </tbody>
      </table>
      <div>
        <button className="footer-button">submit</button>
        <button className="footer-button">save</button>
      </div>
    </>
  );
};
export default Audit;

import React, { useState } from "react";
import "./Files.css";
import Tabledata from "./Tabledata/Tabledata";
import Model from "./model/model";

export const tdata = [
  {
    name: "11.pdf",
    ver: "1.0",
    type: "Artwork",
    addby: "tom ",
    addon: "02-10-2002",
  },

  {
    name: "11121212.pdf",
    ver: "3.0",
    type: "Network",
    addby: "jerry ",
    addon: "02-10-2012",
  },

  {
    name: "551.pdf",
    ver: "0.9",
    type: "Artwork",
    addby: "Harry ",
    addon: "12-11-2016",
  },
];

const Files = () => {
  const [model, modelvalue] = useState(false);
  const unhidehandler = () => {
    modelvalue(true);
  };
  const hideHandler = () => {
    modelvalue(false);
  };

  return (
    <>
      {model && <Model hide={hideHandler} />}
      <button className="add-button" onClick={unhidehandler}>
        Add a file
      </button>

      <div className="table-container">
        <span></span>
        <table border="1" className="data-table">
          <tr>
            <th className="table-head">Actions</th>
            <th className="table-head">File Name</th>
            <th className="table-head">Version</th>
            <th className="table-head">File Type</th>
            <th className="table-head">Added By</th>
            <th className="table-head">Added On</th>
          </tr>
          <tbody>
            {tdata.map((data) => {
              return (
                <Tabledata
                  filename={data.name}
                  version={data.ver}
                  filetype={data.type}
                  addby={data.addby}
                  addon={data.addon}
                ></Tabledata>
              );
              <></>;
            })}
          </tbody>
        </table>
        <div>
          <button className="footer-button">submit</button>
          <button className="footer-button">save</button>
        </div>
      </div>
    </>
  );
};
export default Files;

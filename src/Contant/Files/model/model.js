import React, { useState } from "react";
import "./model.css";
import { tdata } from "../Files";

const Model = (props) => {
  const [loading, setloading] = useState(true);
  const [filename, setfilename] = useState("");
  const [version, setversion] = useState("");
  const [filetype, setfiletype] = useState("");
  const [addby, setaddby] = useState("");
  const [date, setdate] = useState("");

  const unhidehandler = (event) => {
    event.preventDefault();
    props.hide();
  };

  ////collect Values from Model Start/////-------------------------

  const filehandleSubmit = (event) => {
    event.preventDefault();
    setfilename(event.target.value);
  };
  const versionhandleSubmit = (event) => {
    event.preventDefault();
    setversion(event.target.value);
  };
  const typehandleSubmit = (event) => {
    event.preventDefault();
    setfiletype(event.target.value);
  };
  const addbyfilehandleSubmit = (event) => {
    event.preventDefault();
    setaddby(event.target.value);
  };
  const datehandleSubmit = (event) => {
    event.preventDefault();
    setdate(event.target.value);
  };
  ///////-----------------------------------------------collect value from model end-------------------
  const addrow = () => {
    let obj = {
      name: filename,
      ver: version,
      type: filetype,
      addby: addby,
      addon: date,
    };
    tdata.push(obj);
    setloading(false);
  };
  return (
    <>
      {loading && (
        <div class="modal">
          <div class="modal-content">
            <span class="close" onClick={unhidehandler}>
              &times;
            </span>
            <br />
            <span class="m-head">filename</span>
            <br />
            <input
              type="text"
              class="input"
              value={filename}
              onChange={filehandleSubmit}
            />
            <br />
            <span class="m-head">Version</span>
            <br />
            <input
              type="text"
              class="input"
              value={version}
              onChange={versionhandleSubmit}
            />
            <br />
            <span class="m-head">filetype</span>
            <br />
            <input
              type="text"
              class="input"
              value={filetype}
              onChange={typehandleSubmit}
            />
            <br />
            <span class="m-head">Added By</span>
            <br />
            <input
              type="text"
              class="input"
              value={addby}
              onChange={addbyfilehandleSubmit}
            />
            <br />
            <span class="m-head">Add On</span>
            <br />
            <input
              type="date"
              class="input"
              value={date}
              onChange={datehandleSubmit}
            />
            <br />
            <span>&nbsp;</span>
            <button class="addbtn" onClick={addrow}>
              Add
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Model;

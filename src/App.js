import React, { useState } from "react";
import Requestinfo from "./requestinfo/requestinfo";
import DefaultSidebar from "./sidebar/Default/sidebar";
import InsideSideBar from "./sidebar/Inside/InsideSideBar";
import { Routes, Route } from "react-router-dom";
import Files from "./Contant/Files/Files";
import Requestbox from "./Contant/Request/Request";
import Task from "./Contant/task/task";
import Audit from "./Contant/audit/audit";
import Comment from "./Contant/comment/comment";
import "./App.css";

function App() {
  const [Slider, DisValue] = useState(false);

  const InsideHandler = () => {
    DisValue(true);
  };
  const outsideHandler = () => {
    DisValue(false);
  };

  return (
    <>
      <span>
        {!Slider && <DefaultSidebar Inside={InsideHandler} />}
        {Slider && <InsideSideBar outside={outsideHandler} />}
      </span>
      <Requestinfo />

      <Routes>
        <Route path="/" element={<Requestbox />}></Route>
        <Route path="/file" element={<Files />}></Route>
        <Route path="/task" element={<Task />}></Route>
        <Route path="/audit" element={<Audit />}></Route>
        <Route path="/comment" element={<Comment />}></Route>
      </Routes>
    </>
  );
}

export default App;

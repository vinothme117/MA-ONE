import React from "react";
import UserInput from "./InputBox/Inputbox";

const Requestbox = () => {
  return (
    <>
      <UserInput
        Lable1value="RequestNumber"
        Lable2value="Intiated By"
        Lable3value="Intiated Date"
        inputtype="date"
        placeholder1="328P-C"
        placeholder2="Product Intitator"
        placeholder3="10-12-2022"
      ></UserInput>
      <UserInput
        Lable1value="Catagory"
        Lable2value="Brand"
        Lable3value="Product/FG"
        inputtype="text"
        placeholder1="Gifiting"
        placeholder2="SUGAR"
        placeholder3="12"
      ></UserInput>
      <UserInput
        Lable1value="SKU"
        Lable3value="Due Date"
        inputtype="Date"
        placeholder1="1"
        placeholder2="Pack Size"
      ></UserInput>
      <UserInput
        inputtype="text"
        placeholder1="Reason For Request"
        placeholder2="Component Type"
        placeholder3="Component code /Artwork Code"
      ></UserInput>
      <UserInput
        inputtype="Date"
        placeholder1="Product Code"
        placeholder2="Plant Product Code"
        Lable3value="ObsolutionDate"
      ></UserInput>

      <select class="combo">
        <option>Priority</option>
        <option>option1</option>
        <option>option2</option>
        <option>option3</option>
        <option>option4</option>
        <option>option5</option>
      </select>
      <br />
      <div>
        <button className="footer-button">submit</button>
        <button className="footer-button">save</button>
      </div>
    </>
  );
};
export default Requestbox;

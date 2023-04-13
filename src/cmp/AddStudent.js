import React, { useContext } from "react";
import ContextData from "./ContextAPI";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

const AddStudent = () => {
  const data = useContext(ContextData);
  const nav = useNavigate();
  const newStu = {
    name: "",
    age: "",
    course: "",
    batch: "",
  };

  const handleChange = (e) => {
    newStu[e.target.name] = e.target.value;
  };

  const handleSubmit = () => {
    data.entries.push(newStu);
    nav("/student");
    console.log(data);
  };

  const cancelAddStudent = () => {
    nav("/student");
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="form">
          <fieldset className="field">
            <legend> Name </legend>
            <input type="text" name="name" onChange={handleChange} />
          </fieldset>

          <fieldset className="field">
            <legend> Age </legend>
            <input type="number" name="age" onChange={handleChange} />
          </fieldset>

          <fieldset className="field">
            <legend> Course </legend>
            <input type="text" name="course" onChange={handleChange} />
          </fieldset>

          <fieldset className="field">
            <legend> Batch </legend>
            <input type="text" name="batch" onChange={handleChange} />
          </fieldset>
        </div>
        <div className="grid-btn">
          <button className="button btn1" onClick={cancelAddStudent}>
            Cancel
          </button>
          <button className="button btn2" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddStudent;

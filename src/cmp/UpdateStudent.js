import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContextData from "./ContextAPI";
import Nav from "./Nav";

const UpdateStudent = () => {
  const dataContext = useContext(ContextData);
  const index = useLocation().state.data;
  const navi = useNavigate();
  console.log(index);
  console.log(dataContext);

  const updateData = {
    name: dataContext.entries[index].name,
    age: dataContext.entries[index].age,
    course: dataContext.entries[index].course,
    batch: dataContext.entries[index].batch,
  };

  const handleChange = (e) => {
    updateData[e.target.name] = e.target.value;
  };

  const handleSubmit = () => {
    dataContext.entries[index] = updateData;
    //navigate(-1)
    navi("./student");
    console.log(dataContext);
  };

  const cancelUpdateStudent = () => {
    navi("./student");
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="form">
          <fieldset className="field">
            <legend> Name </legend>
            <input
              type="text"
              placeholder={dataContext.entries[index].name}
              name="name"
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="field">
            <legend> Age </legend>
            <input
              type="number"
              placeholder={dataContext.entries[index].age}
              name="age"
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="field">
            <legend> Course </legend>
            <input
              type="text"
              placeholder={dataContext.entries[index].course}
              name="course"
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="field">
            <legend> Batch </legend>
            <input
              type="text"
              placeholder={dataContext.entries[index].batch}
              name="batch"
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <div className="grid-btn">
          <button className="button btn1" onClick={cancelUpdateStudent}>
            Cancel
          </button>
          <button className="button btn2" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateStudent;

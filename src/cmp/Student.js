import React, { useContext } from "react";
import Nav from "./Nav";
import ContextData from "./ContextAPI";
import { Link, useNavigate } from "react-router-dom";

const Student = () => {
  const dataContext = useContext(ContextData);
  console.log(dataContext);
  const navi = useNavigate();
  return (
    <>
      <Nav />
      <div className="container">
        <header>
          <h1 className="head1">Student</h1>
          <button
            className="btn"
            onClick={() => {
              navi("/addstudent");
            }}
          >
            Add New Student
          </button>
        </header>
        <table id="details">
          <thead>
            <tr>
              <td className="t-head">Name</td>
              <td className="t-head">Age</td>
              <td className="t-head">Course</td>
              <td className="t-head">Batch</td>
              <td className="t-head">Change</td>
            </tr>
          </thead>
          <tbody>
            {dataContext.entries.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="t-head">{item.name}</td>
                  <td className="t-head">{item.age}</td>
                  <td className="t-head">{item.course}</td>
                  <td className="t-head">{item.batch}</td>
                  <td className="t-head">
                    <Link to="/updatestudent" state={{ data: index }}>
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Student;

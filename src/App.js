import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./cmp/Home";
import Student from "./cmp/Student";
import Contact from "./cmp/Contact";
import { useState } from "react";
import ContextData from "./cmp/ContextAPI";
import AddStudent from "./cmp/AddStudent";
import UpdateStudent from "./cmp/UpdateStudent";

function App() {
  const [data, setData] = useState([
    {
      name: "John",
      age: "24",
      course: "MERN",
      batch: "October",
    },
    {
      name: "Doe",
      age: "25",
      course: "MERN",
      batch: "November",
    },
    {
      name: "Biden",
      age: "26",
      course: "MERN",
      batch: "September",
    },
    {
      name: "Barar",
      age: "22",
      course: "MERN",
      batch: "September",
    },
    {
      name: "Christ",
      age: 23,
      course: "MERN",
      batch: "October",
    },
    {
      name: "Elent",
      age: 24,
      course: "MERN",
      batch: "November",
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/student"
            element={
              <ContextData.Provider
                value={{ entries: data, updateData: setData }}
              >
                <Student />
              </ContextData.Provider>
            }
          />
          <Route
            path="/addstudent"
            element={
              <ContextData.Provider
                value={{ entries: data, updateData: setData }}
              >
                <AddStudent />
              </ContextData.Provider>
            }
          />
          <Route
            path="/updatestudent"
            element={
              <ContextData.Provider
                value={{ entries: data, updateData: setData }}
              >
                <UpdateStudent />
              </ContextData.Provider>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

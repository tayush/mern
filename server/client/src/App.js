import React from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import SearchEmployee from "./components/SearchEmployee";
import EmployeeList from "./components/EmployeeList";
import validator from "validator";

const required = (value) => {
  if (!value.toString().trim().length) {
    return "require";
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`;
  }
};

function App() {
  return (
    <div className="App">
      <EmployeeForm></EmployeeForm>
      <SearchEmployee></SearchEmployee>
    </div>
  );
}

export default App;

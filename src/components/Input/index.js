import React from "react";
import "./style.css";

const Input = ({ type, value, placeholder }) => {
  return (
    <input
      className="inputfield"
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;

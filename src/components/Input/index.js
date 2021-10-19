import React from "react";
import "./style.css";

const Input = ({ type, value, placeholder, width }) => {
  return (
    <input
      className="inputfield"
      style={{ width: width }}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;

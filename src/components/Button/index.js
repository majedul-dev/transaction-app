import React from "react";
import "./style.css";

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${className} button`}>
      {children}
    </button>
  );
};

export default Button;

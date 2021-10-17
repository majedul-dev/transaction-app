import React from "react";
// import "./style.css";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container authform">
      <h2>Create an Account</h2>
      <form className="pt-5">
        <Input placeholder="Enter Name" type="text" />
        <Input placeholder="Enter Email" type="email" />
        <Input placeholder="Enter Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
        <Input type="submit" value="Sign Up" />
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;

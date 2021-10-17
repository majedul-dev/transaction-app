import React from "react";
import "./style.css";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container authform">
      <h2>Login to Your Account</h2>
      <form className="pt-5">
        <Input placeholder="Enter Email" type="email" />
        <Input placeholder="Enter Password" type="password" />
        <Input type="submit" value="Login" />
      </form>
      <p>
        Don't have an account? <Link to="/register">Signup</Link>
      </p>
    </div>
  );
};

export default Login;

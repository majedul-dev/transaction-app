import React from "react";
import "./style.css";
import { Input, Button } from "../../components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="container section authform">
      <h2>Login to Your Account</h2>
      <form className="pt-4 ">
        <Input placeholder="Enter Email" type="email" />
        <Input placeholder="Enter Password" type="password" />
        <Button type="submit">Login</Button>
      </form>
      <p className="mt-3">
        Don't have an account? <Link to="/register">Signup</Link>
      </p>
    </section>
  );
};

export default Login;

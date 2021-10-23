import React from "react";
import "./style.css";
import { Input, Button } from "../../components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="container section authform">
      <h2>Login to Your Account</h2>
      <form className="pt-4 formStyle">
        <div class="form-group">
          <label>Username</label>
          <Input placeholder="Enter Username" type="text" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <Input placeholder="Enter Password" type="password" />
        </div>
        <Button type="submit" className="mt-3">
          Login
        </Button>
      </form>
      <p className="mt-3">
        Don't have an account? <Link to="/register">Signup</Link>
      </p>
    </section>
  );
};

export default Login;

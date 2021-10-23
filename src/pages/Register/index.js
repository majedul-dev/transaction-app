import React from "react";
import { Input, Button } from "../../components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="section container authform">
      <div className="div"></div>
      <h2>Create an Account</h2>
      <form className="pt-4 formStyle">
        <div class="form-group">
          <label>Username</label>
          <Input placeholder="Enter Username" type="text" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <Input placeholder="Enter Email" type="email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <Input placeholder="Enter Password" type="password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <Input placeholder="Confirm Password" type="password" />
        </div>
        <Button type="submit" className="mt-3">
          Register
        </Button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </section>
  );
};

export default Register;

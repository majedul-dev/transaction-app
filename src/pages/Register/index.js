import React from "react";
import { Input, Button } from "../../components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="section container authform">
      <h2>Create an Account</h2>
      <form className="pt-4">
        <Input placeholder="Enter Name" type="text" />
        <Input placeholder="Enter Email" type="email" />
        <Input placeholder="Enter Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
        <Button type="submit">Register</Button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </section>
  );
};

export default Register;

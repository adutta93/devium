import React from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <div className="form-right">
        <form>
          <h1>Sign Up</h1>
          <div className="form-input">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-input">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-input">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Password"
            />
          </div>

          <div className="form-input">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="password2"
              className="form-input"
              placeholder="Confirm Password"
            />
          </div>
        </form>
        <Button bigBtn value="Sign Up" />
        <span>
          Already have an acount ? <Link to="/signin">Sign In</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;

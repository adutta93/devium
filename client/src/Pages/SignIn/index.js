import React, { useState } from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const alert = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Success",
      text: "Successfully loggedin",
      icon: "success",
      showCancelButton: true,
    });
    console.log(formData);
  };

  return (
    <div>
      <div className="form-right">
        <form onSubmit={(e) => alert(e)}>
          <h1>Sign In</h1>

          <div className="form-input">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
            />
          </div>

          <div className="form-input">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="form-input"
              placeholder="Password"
            />
          </div>
          <Button bigBtn value="Sign In" />
        </form>
        <span>
          Don't have an acount ? <Link to="/register">Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;

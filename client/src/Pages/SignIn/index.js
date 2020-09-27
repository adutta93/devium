import React, { useState } from "react";
import Button from "../../Components/Button";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import "./index.css";
// import axios from "axios";
import { connect } from "react-redux";
import { login } from "../../Redux/actions/auth.action";

const SignIn = ({ login, isAuthenticated, user }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const alert = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire({
        title: "warning",
        text: "Please enter all field",
        icon: "warning",
        position: "center",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      login({ email, password });
      Swal.fire({
        title: "Success",
        text: "Log In Successfull",
        icon: "success",
        position: "center",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/manageprofile" />;
  }

  return (
    <div className="body">
      <div className="container">
        <h1 className="title">Login</h1>
        <form onSubmit={(e) => alert(e)}>
          <div className="items">
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
        <span className="footer-text">
          Don't have an acount ?{" "}
          <Link className="footer" to="/register">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isUser: state.auth.user,
});

export default connect(mapStateToProps, { login })(SignIn);

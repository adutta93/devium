import React, { useState } from "react";
import Button from "../../Components/Button";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
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
        timer: 3000,
      });
    }
  };

  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isUser: state.auth.user,
});

export default connect(mapStateToProps, { login })(SignIn);

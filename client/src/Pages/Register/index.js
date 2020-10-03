import React, { useState } from "react";
import "./index.css";
import Button from "../../Components/Button";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { setAlert } from "../../Redux/actions/alert.action";
import { register } from "../../Redux/actions/auth.action";
import Alert from "../../Components/Alert";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const error = {
    position: "center",
    icon: "error",
    title: "Error",
    showConfirmButton: false,
    timer: 3000,
    text: "Password dose not match",
  };

  const alert = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !password2) {
      setAlert("Enter all fields", "warning");
    } else if (password.length < 8) {
      setAlert("Password length should be of atleast 8 characters", "warning");
    } else if (password !== password2) {
      // setAlert("Password dose not match", "danger");
      Swal.fire(error);
    } else {
      register({ name, email, password });
      setAlert("Registration successfull", "success");
      setFormData({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/manageprofile" />;
  }
  // else if (token2 === null) {
  //   Swal.fire(errorAcount);
  // }
  return (
    <div className="reg-body">
      <div className="reg-container">
        <Alert />
        <h1 className="reg-title">Register</h1>
        <form onSubmit={(e) => alert(e)}>
          <div className="reg-items">
            <input
              type="text"
              name="name"
              className="form-input"
              value={name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
            />

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

            <input
              type="password"
              name="password2"
              value={password2}
              onChange={(e) =>
                setFormData({ ...formData, password2: e.target.value })
              }
              className="form-input"
              placeholder="Confirm Password"
            />
          </div>

          <Button bigBtn value="Sign Up" />
        </form>
        <span className="reg-footer-text">
          Already have an acount ?{" "}
          <Link className="reg-footer" to="/signin">
            Sign In
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
export default connect(mapStateToProps, { setAlert, register })(Register);

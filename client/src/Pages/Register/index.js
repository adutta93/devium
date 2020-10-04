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

  const alert = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !password2) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Warning",
        showConfirmButton: false,
        timer: 3000,
        text: "Please enter all field",
      });
    } else if (password.length < 8) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Warning",
        showConfirmButton: false,
        timer: 3000,
        text: "Password length should be of atleast 8 characters",
      });
    } else if (password !== password2) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        showConfirmButton: false,
        timer: 3000,
        text: "Password dose not match",
      });
    } else {
      register({ name, email, password });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Success",
        showConfirmButton: false,
        timer: 3000,
        text: "Successfully registered.!!",
      });
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

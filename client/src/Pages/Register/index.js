import React, { useState } from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { setAlert } from "../../Redux/actions/alert.action";
import { register } from "../../Redux/actions/auth.action";
import { token } from "morgan";

// import axios from "axios";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  // all alert objects
  const error = {
    position: "center",
    icon: "error",
    title: "Error",
    showConfirmButton: false,
    timer: 3000,
    text: "Password dose not match",
  };
  const errorAcount = {
    position: "center",
    icon: "error",
    title: "Error",
    showConfirmButton: false,
    timer: 3000,
    text: "User already exists",
  };
  const errorPassword = {
    position: "center",
    icon: "error",
    title: "Error",
    showConfirmButton: false,
    timer: 3000,
    text: "Password length should be of atleast 8 characters",
  };
  const success = {
    title: "Success",
    text: "Registration successfull",
    icon: "success",
    position: "center",
    showConfirmButton: false,
    timer: 3000,
  };

  const warning = {
    title: "warning",
    text: "Please enter all field",
    icon: "warning",
    position: "center",
    showConfirmButton: false,
    timer: 3000,
  };
  const token2 = localStorage.getItem("token");
  const alert = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !password2) {
      Swal.fire(warning);
    } else if (password.length < 8) {
      Swal.fire(errorPassword);
    } else if (password !== password2) {
      Swal.fire(error);
    } else {
      register({ name, email, password });
      console.log(token);
      Swal.fire(success);
      setFormData({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
    }
  };

  // else if (token2 === null) {
  //   Swal.fire(errorAcount);
  // }
  return (
    <div>
      <div className="form-right">
        <form onSubmit={(e) => alert(e)}>
          <h1>Sign Up</h1>
          <div className="form-input">
            <label className="form-label">Name</label>
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
          </div>

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

          <div className="form-input">
            <label className="form-label">Confirm Password</label>
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
        <span>
          Already have an acount ? <Link to="/signin">Sign In</Link>
        </span>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   setAler: state.alert,
//   register: state.register,
// });
export default connect(null, { setAlert, register })(Register);

import React, { useState } from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { setAlert } from "../../Redux/actions/alert";
// import axios from "axios";

const Register = ({ setAlert }) => {
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
    timer: 1500,
    text: "Password dose not match",
  };

  const success = {
    title: "Success",
    text: "Registration successfull",
    icon: "success",
    position: "center",
    showConfirmButton: false,
    timer: 1500,
  };

  const warning = {
    title: "warning",
    text: "Please enter all field",
    icon: "warning",
    position: "center",
    showConfirmButton: false,
    timer: 1500,
  };
  const alert = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !password2) {
      setAlert(Swal.fire(warning));
    } else if (password !== password2) {
      setAlert(Swal.fire(error));
    } else {
      setAlert(Swal.fire(success));
    }
  };

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

export default connect(null, { setAlert })(Register);

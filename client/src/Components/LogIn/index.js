import React, { useState } from "react";
import "./index.css";
import Swal from "sweetalert2";
import Button from "../Button";
// import wave from "../../assets/wave.png";
// import avatar from "../../assets/avatar.svg";
// import bg from "../../assets/bg.svg";

const LogIn = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
  });

  const handleSubmit = () => {
    Swal.fire({
      title: "Successfull",
      text: "Your have successfully logged in",
      icon: "success",
      showCancelButton: true,
    });
    setFormValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <h2>Log In</h2>
     
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={formValue.email}
          placeholder="Email ID"
          required
          onChange={(e) =>
            setFormValue({ ...formValue, email: e.target.value })
          }
        />
        <input
          type="password"
          value={formValue.password}
          placeholder="Password"
          required
          onChange={(e) =>
            setFormValue({ ...formValue, password: e.target.value })
          }
        />
        <Button value="Log In" />
      </form>
      <div className="footer">
        <h5>
          Don't have an account ? <span>Sign Up</span>
        </h5>
      </div>
    </div>
  );
};

export default LogIn;

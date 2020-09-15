import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "../Button";
// import wave from "../../assets/wave.png";
// import avatar from "../../assets/avatar.svg";
// import bg from "../../assets/bg.svg";

const Register = () => {
  const [error, setError] = useState("");
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    // isLoggedIn: false,
  });

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/register", {
        firstname: formValue.firstName,
        lastname: formValue.laststName,
        email: formValue.email,
        password: formValue.password,
      });
      // const res = axios({
      //   method: "post",
      //   url: "/api/users/register",
      //   data: {
      //     firstname: formValue.firstName,
      //     lastname: formValue.laststName,
      //     email: formValue.email,
      //     password: formValue.password,
      //   },
      // });
      Swal.fire({
        title: "Successfull",
        text: "Your have successfully registered",
        icon: "success",
        showCancelButton: true,
      });
      setFormValue({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
      setError(res.data.msg);
    } catch (error) {
      console.log(error.response)
      error.response.data.msg && setError(error.response.data.msg);
    }
  };

  return (
    <div className="register">
      <h2>Sign Up</h2>

      <form onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          value={formValue.firstname}
          name="firstname"
          placeholder="First Name"
          required
          onChange={(e) =>
            setFormValue({ ...formValue, firstname: e.target.value })
          }
        />

        <input
          type="text"
          value={formValue.lastname}
          name="lastname"
          placeholder="Last Name"
          required
          onChange={(e) =>
            setFormValue({ ...formValue, lastname: e.target.value })
          }
        />
        <input
          type="email"
          value={formValue.email}
          placeholder="Email ID"
          name="email"
          required
          onChange={(e) =>
            setFormValue({ ...formValue, email: e.target.value })
          }
        />
        <input
          type="password"
          value={formValue.password}
          placeholder="Password"
          name="password"
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

export default Register;

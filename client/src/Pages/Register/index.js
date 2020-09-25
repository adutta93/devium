import React, { useState } from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const alert = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      Swal.fire({
        title: "Error",
        text: "Password dose not match",
        icon: "error",
        showCancelButton: true,
      });
    }

    Swal.fire({
      title: "Success",
      text: "Registration successfull",
      icon: "success",
      showCancelButton: true,
    });

    console.log(formData);
    // else {
    //   const newUser = {
    //     name,
    //     email,
    //     password,
    //   };

    //   try {
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     };
    //     const body = JSON.stringify(newUser);
    //     const result = await axios.post("/api/users/signup", body, config);
    //     Swal.fire({
    //       title: "Success",
    //       text: "You've signed up!",
    //       icon: "success",
    //       showCancelButton: true,
    //     });
    //     console.log(result.data);
    //   } catch (error) {
    //     Swal.fire({
    //       title: "Error",
    //       text: "Something happened",
    //       icon: "error",
    //       showCancelButton: true,
    //     });
    //     console.log(error.response.data);
    //   }

    //   setFormData({
    //     name: "",
    //     email: "",
    //     password: "",
    //     password2: "",
    //   });
    // }
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

export default Register;

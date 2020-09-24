import React from "react";
import Button from "../../Components/Button";
import LogInImg from "../../Assets/login.svg";
import "./index.css";
const SignIn = () => {
  return (
    <div>
      <div className="container">
        <div className="img">
          <img src={LogInImg} />
        </div>
        <div className="login-content">
          <form action="index.html">
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" className="input" />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <Button logInBtn value="Sign In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

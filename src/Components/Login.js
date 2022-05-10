import React from "react";
import "../Style/Home.css";
import text from "../Asset/Images/text.png";

const Login = ({ setIsLogInTrue, closeModal }) => {
  return (
    <div className="main">
      {/* <div className="logo"></div> */}

      <div className="login">
        <div className="circle-img-signup">
          <div onClick={closeModal} className="sign-inside">
            <img className="img-cross" src={text}></img>
          </div>
        </div>

        <div className="header-main">
          <h3 className="welcome-text">WELCOME BACK </h3>
          <h3 className="header-text">Log into your account</h3>
        </div>

        <div className="form">
          <div className="email">
            <lable className="label">Email or userName</lable>
            <input
              className="input-field"
              placeholder="Enter Your EmailId or userName"
              type="text"
            ></input>
          </div>

          <div className="email">
            <div className="label-container">
              <label className="label">Password</label>
              <label className="label">Forgot Password</label>
            </div>

            <input
              className="input-field"
              placeholder="Enter Your Password"
              type="password"
            ></input>
          </div>
        </div>

        <button className="btn" onClick={closeModal}>
          <div className="login-btn">Login Now</div>
        </button>

        <div className="footer">
          <p className="footer-text" onClick={() => setIsLogInTrue("Register")}>
            Not Registered yet? <span className="span-login"> Register →</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

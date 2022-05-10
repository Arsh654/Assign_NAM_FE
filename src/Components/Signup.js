import React from "react";
//import cross from "../Asset/Images/Cross.png";
import text from "../Asset/Images/text.png";
import "../Style/Home.css";

const SignUp = ({ setIsLogInTrue, closeModal }) => {
  return (
    <div className="main">
      {/* <div className="logo"></div> */}

      <div className="login">
        {/* div for X button on left side */}
        <div className="circle-img-signup">
          <div onClick={closeModal} className="sign-inside">
            <img className="img-cross" src={text}></img>
          </div>
        </div>
        <div className="header-main">
          <h3 className="welcome-text">SIGN UP</h3>
          <h3 className="header-text">Create an account to continue</h3>
        </div>

        <div className="form">
          <div className="email">
            <lable className="label">Email </lable>
            <input
              className="input-field"
              placeholder="Enter Your Email"
              type="text"
            ></input>
          </div>
          <div className="email">
            <lable className="label">Username </lable>
            <input
              className="input-field"
              placeholder="Choose a preferred username"
              type="text"
            ></input>
          </div>

          <div className="email">
            <div className="label-container">
              <label className="label">Password</label>
              {/* <label className="label">Forgot Password</label> */}
            </div>

            <input
              className="input-field"
              placeholder="Choose a strong password"
              type="password"
            ></input>
          </div>
        </div>

        <button className="btn" onClick={closeModal}>
          Continue
        </button>

        <div className="footer">
          <p className="footer-text" onClick={() => setIsLogInTrue("Login")}>
            Already have an account?{" "}
            <span className="span-login">Login → </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

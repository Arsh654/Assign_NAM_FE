import React from "react";
import ladki from "../Asset/Images/ladki.png";
import text from "../Asset/Images/text.png";
import hand from "../Asset/Images/hand.png";
import takla from "../Asset/Images/takla.png";
import udaas from "../Asset/Images/udaas.png";
import "../Style/Card.css";

const Card = () => {
  return (
    <div>
      <div className="Post-container">
        <div className="big-div">
          <div className="left">
            <div className="ladkii">
              <img src={ladki}></img>
            </div>
            <div className="name">
              <span style={{ color: "white" }}>Theresa Webb</span>
              <span style={{ color: "#7F8084" }}>5mins ago</span>
            </div>
          </div>
          <div className="dot">
            <img src={text}></img>
          </div>
        </div>
        <div className="post-input">
          <div className="circle-img">
            <img className="i" src={hand}></img>
          </div>
          <input
            className="postInputField post-home"
            type="text"
            placeholder="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          ></input>
        </div>
        <div className="comment-section">
          {/* <button className="post-btn">POST</button> */}
          <img src={text}></img>
          <span className="span-card">24 Comments</span>
        </div>
      </div>
      {/* 2nd div */}
      <div style={{ marginTop: "20px" }} className="Post-container">
        <div className="big-div">
          <div className="left">
            <div className="ladkii">
              <img className="i" src={takla}></img>
            </div>
            <div className="name">
              <span style={{ color: "white" }}>Marvin McKinney</span>
              <span style={{ color: "#7F8084" }}>8mins ago</span>
            </div>
          </div>
          <div className="dot">
            <img src={text}></img>
          </div>
        </div>
        <div className="post-input">
          <div className="circle-img">
            <img src={udaas}></img>
          </div>
          <input
            className="postInputField post-home"
            type="text"
            placeholder="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          ></input>
        </div>
        <div className="comment-section">
          {/* <button className="post-btn">POST</button> */}
          <img src={text}></img>
          <span className="span-card">24 Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

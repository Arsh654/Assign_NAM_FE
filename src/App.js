import React, { useState } from "react";
// import Login from "./Components/Login";
import Home from "./Screens/Home";
// import Signup from "./Components/Signup";
import "./Style/loginStyle.css";
import LoginScreen from "./Screens/LoginScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ paddingLeft: 200, paddingRight: 200 }}>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

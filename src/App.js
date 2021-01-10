import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./config/particlesConfig";
import Logo from "./Components/Logo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particlesConfig} />

      {/* <img
        className="logo"
        src={myPic}
        alt="picture of Benjamin Szwimer"
        rounded
      /> */}
      <Logo />
    </div>
  );
}

export default App;

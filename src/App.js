import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./config/particlesConfig";

function App() {
  return (
    <div style={{ width: "100%", heigh: "100vh", backgroundColor: "black" }}>
      <Particles height="100vh" width="100vw" params={particlesConfig} />
    </div>
  );
}

export default App;

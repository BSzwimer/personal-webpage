import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Particles from "react-particles-js";
import particlesConfig from "./config/particlesConfig";
import Logo from "./Components/Logo";
import AboutMe from "./Components/AboutMe";
import Transcript from "./Components/Transcript";
import Resume from "./Components/Resume";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Particles className="particles" params={particlesConfig} />
          <Route path="/" exact component={Logo} />
          <Route path="/aboutme" exact component={AboutMe} />
          <Route path="/transcript" exact component={Transcript} />
          <Route path="/resume" exact component={Resume} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

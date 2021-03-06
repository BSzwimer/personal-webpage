import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Particles from "react-particles-js";
import particlesConfig from "./config/particlesConfig";
import Logo from "./Components/Logo";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import myResume from "./images/BenjaminSzwimerResume.pdf";
import "./App.css";
import PDFDisplay from "./Components/PDFDisplay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Particles className="particles" params={particlesConfig} />
          <Route path="/" exact component={Logo} />
          <Route path="/aboutme" exact component={AboutMe} />
          <Route
            path="/resume"
            exact
            component={() => <PDFDisplay title="myResume" doc={myResume} />}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

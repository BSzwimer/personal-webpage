import React from "react";
import LogoPic from "../images/me.png";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <h1
        style={{
          paddingTop: "10%",
          color: "#ffffff",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        Benjamin Szwimer
      </h1>

      <div className="pa3">
        <img
          className="ui middle aligned large image "
          src={LogoPic}
          alt="frontpage of Benjamin Szwimer"
        />
      </div>
      <h3
        style={{
          color: "#ffffff",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        Software Engineer, B.Eng, McGill University
      </h3>
    </div>
  );
};

export default Logo;

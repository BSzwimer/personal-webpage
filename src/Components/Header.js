import React, { useState } from "react";
import { Link } from "react-router-dom";

const headerItems = [
  { title: "Home", path: "/" },
  { title: "Resume", path: "/resume" },
  { title: "Transcript", path: "/transcript" },
  { title: "About me", path: "/aboutme" },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const headerRender = () => {
    return headerItems.map((item, index) => {
      const active = activeIndex === index ? "teal item active" : "item";
      return (
        <React.Fragment key={item.title}>
          <Link
            to={item.path}
            className={active}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </Link>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="ui inverted secondary pointing menu">
      {headerRender()}
      <div
        className="right menu"
        style={{ paddingTop: "10px", paddingRight: "10px" }}
      >
        <a href="https://github.com/BSzwimer" target="_blank" rel="noreferrer">
          <i className="inverted github icon large"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-szwimer-39448a173/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="inverted linkedin icon large"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;

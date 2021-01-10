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
    <div className="ui inverted secondary pointing menu">{headerRender()}</div>
  );
};

export default Header;

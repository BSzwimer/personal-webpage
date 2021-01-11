import React from "react";
import myPic from "../images/Benjamin.png";

const AboutMe = () => {
  return (
    <div>
      <img
        className="ui middle aligned medium image circular"
        src={myPic}
        alt="about me section Benjamin Szwimer"
      />
      <div>
        <h3
          style={{
            color: "#ffffff",
            paddingTop: "2%",
            paddingLeft: "10%",
            paddingRight: "10%",
            textIndent: "10%",
            textAlign: "left",
          }}
        >
          My name is Benjamin Szwimer, I am a 4th year student in Software
          Engineering at McGill University. I anticipate to gradute with a B.Eng
          in December, 2021. I am interested in everything software and I try to
          expose myself to as many different technologies as possible. I have
          participated in hackathons, partaken in software engineering
          internships and worked on different side projects!
        </h3>
        <h3
          style={{
            color: "#ffffff",

            paddingLeft: "10%",
            paddingRight: "10%",
            textIndent: "10%",
            textAlign: "left",
          }}
        >
          During my free time I love to play sports and stay active. I completed
          my first sprint triathalon during the summer of 2019 and I intend to
          do longer distances in the future! I also enjoy to read so if you have
          any good book suggestions don't hesitate to reach out.
        </h3>
        <h3
          style={{
            color: "#ffffff",

            paddingLeft: "10%",
            paddingRight: "10%",
            textIndent: "10%",
            textAlign: "left",
          }}
        >
          I am always eager to apply my software engineering knowledge to new
          carrer opportunities so feel free to contact me by email:
          benjamin.szwimer@mail.mcgill.ca or connect with me on Linkedin by
          clicking the link at the top of the page!
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import myTranscript from "../images/BenjaminSzwimerTranscript.pdf";

const Transcript = () => {
  return (
    <div className="resp-container">
      <iframe
        title="myTranscript"
        className="resp-iframe"
        src={myTranscript}
      ></iframe>
    </div>
  );
};

export default Transcript;

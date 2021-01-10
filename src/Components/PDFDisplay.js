import React from "react";

const PDFDisplay = ({ title, doc }) => {
  return (
    <div className="resp-container">
      <iframe title={title} className="resp-iframe" src={doc}></iframe>
    </div>
  );
};

export default PDFDisplay;

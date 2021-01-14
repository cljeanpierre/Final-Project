import React from "react";

function InputBoxCSS({ children }) {
  return (
    <div className="card inputBox"
      style={{ width: "max-content",
      margin: "1rem auto",
      border: ".1rem solid #cfdac8",
      boxShadow: ".1rem .1rem .1rem darkgrey",
      textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

export default InputBoxCSS;

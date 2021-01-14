import React from "react";

function TitleDiv({ children }) {
  const style ={
    base:{
      width: "max-content",
      margin: "2rem auto 0rem",
      padding: "auto",
      textAlign: "center",
      fontFamily: "Georgia, 'Times New Roman', Times, serif"
    }
  }
  return (
    <div style={style.base}>
      {children}
    </div>
  );
}

export default TitleDiv;



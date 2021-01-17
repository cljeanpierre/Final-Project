import React from "react";

export default function SignUpBtn(props) {
  const style ={
    base:{
      backgroundColor: "#d6efc7",
      borderRadius: "7px",
      margin: "0 1rem 0",
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
      fontSize:"1.2rem",
      cursor:"pointer"
    }
  }
    return (
      <div>
          <button style={style.base}>{props.children}</button>
      </div>
    );
  }
  
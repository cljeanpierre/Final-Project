import React from "react";

export default function SignUpBtn(props) {
  const style ={
    base:{
      backgroundColor: "#d6efc7",
      boxShadow: ".6rem .6rem .6rem darkgrey",
      borderRadius: ".2em",
      margin: "0 1rem 0",
      fontFamily: "Georgia, 'Times New Roman', Times, serif"
    }
  }
    return (
      <div>
          <button style={style.base}>Sign Up</button>
      </div>
    );
  }
  
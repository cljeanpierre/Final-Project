import React from "react";
import Logo from "../../../../src/quiz-logo.png"

function Title(props) {
  const style ={
    base:{
      width: "15.5rem",
      margin: "0 auto",
    }
  }
  return (
    <img src={Logo} style={style.base}/>
   
  );
}

export default Title;



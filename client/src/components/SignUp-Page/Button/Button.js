import React from "react";
import Radium from "radium"

function Btn(props) {
  const style ={
    base:{
      backgroundColor: "#cfdac8",
      borderRadius: ".5rem",
      margin: props.margin,
      fontFamily:"Verdana, Geneva, Tahoma, sans-serif;",
      fontSize:"1.2rem",
      cursor:"pointer",
      
      ':hover':{
        background: "lightyellow",
      },
      ':active':{
        background: "lightblue"
      }
    }
  }
    return (
          <button {...props} style={style.base}>{props.children}</button>
    );
  }

  export default Radium(Btn);
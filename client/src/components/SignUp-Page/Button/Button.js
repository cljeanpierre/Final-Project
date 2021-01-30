import React from "react";
import Radium from "radium"

function Btn(props) {
  const style ={
    base:{
      background:"#cfdac8",
      borderRadius: ".5rem",
      margin: props.margin,
      fontFamily:"Verdana, Geneva, Tahoma, sans-serif;",
      fontSize:"1.2rem",
      cursor:"pointer",
      
      ':hover':{
        background: "lightyellow",
        textDecoration: "underline solid black"
      },
      ':active':{
        background: "lightgreen"
      }
    }
  }
    return (
          <button {...props} style={style.base}>{props.children}</button>
    );
  }

  export default Radium(Btn);
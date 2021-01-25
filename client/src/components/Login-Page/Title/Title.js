import React from "react";

function Title(props) {
  const style ={
    base:{
      width: "max-content",
      margin: "auto auto 2rem",
      textShadow: ".2rem .2rem .2rem goldenrod",
      fontFamily: "Verdana, Geneva, Tahoma, sans-serif;",
      color: props.color
    }
  }
  return (
    <div style={style.base}>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Title;



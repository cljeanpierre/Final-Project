import React from "react";

function Title(props) {
  const style ={
    base:{
      width: "max-content",
      margin: "auto auto 2rem",
      textShadow: ".4rem .4rem .4rem goldenrod",
      textAlign: "center",
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
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



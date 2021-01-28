import React from "react";

function Title(props) {
  const style ={
    base:{
      width: "max-content",
      margin: "0 auto",
    }
  }
  return (
    <div style={style.base}>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Title;



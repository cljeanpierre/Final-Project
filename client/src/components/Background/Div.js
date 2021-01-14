import React from "react";

function Background(props) {
  const style ={
    base:{
      width: "100%",
      margin: "0rem auto",
      display: props.display,
      alignItems: props.alignItems,
    }
  }
  return (
    <div style ={style.base}>
        {props.children}
    </div>
  );
}

export default Background;

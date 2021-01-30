import React from "react";

function Div(props) {
  const style ={
    base:{
      width: props.width,
      margin: props.margin,
      display: props.display,
      alignItems: props.alignItems,
      "flex-wrap":"no-wrap",
      height:"max-content"
    }
  }
  return (
    <div class={props.class} style ={style.base}>
        {props.children}
    </div>
  );
}

export default Div;

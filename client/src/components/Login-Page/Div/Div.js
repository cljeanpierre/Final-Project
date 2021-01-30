import React from "react";

function Div(props) {
  const style ={
    base:{
      width: props.width,
      margin: "auto",
      display: props.display,
      alignItems: props.alignItems,
      "flex-wrap":"no-wrap",
      height:props.height
    }
  }
  return (
    <div class={props.class} style ={style.base}>
        {props.children}
    </div>
  );
}

export default Div;

import React from "react";

function Div(props) {
  const style ={
    base:{
      width: "max-content",
      margin: props.margin,
      display: props.display,
      alignItems: props.alignItems,
      display:props.display,
      position:props.position,
      "z-index": props.zIndex,
      "flex-wrap":"none"
    }
  }
  return (
    <div class= {props.col} style ={style.base}>
        {props.children}
    </div>
  );
}

export default Div;

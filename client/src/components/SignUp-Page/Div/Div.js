import React from "react";

function Div(props) {
  const style ={
    base:{
      width: "max-content",
      margin: props.margin,
      display: props.display,
      alignItems: props.alignItems,
      display:props.display,
      "flex-wrap":"none"
    }
  }
  return (
    <div style ={style.base}>
        {props.children}
    </div>
  );
}

export default Div;

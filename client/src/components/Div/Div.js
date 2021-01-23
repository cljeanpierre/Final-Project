import React from "react";

function Div(props) {
  const style ={
    base:{
      width: "max-content",
      margin: props.margin,
      display: props.display,
      alignItems: props.alignItems,
      padding: props.padding,
    }
  }
  return (
    <div style ={style.base}>
        {props.children}
    </div>
  );
}

export default Div;

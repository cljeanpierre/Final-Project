import React from "react";

function Div(props) {
  const style ={
    base:{
      width: props.width,
      margin: props.margin,
      display: props.display,
      alignItems: props.alignItems,
      "flex-wrap":"inherit"
    }
  }
  return (
    <div class="row"style ={style.base}>
        {props.children}
    </div>
  );
}

export default Div;

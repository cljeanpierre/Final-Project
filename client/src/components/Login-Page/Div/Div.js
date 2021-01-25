import React from "react";

function LoginDiv(props) {
  const style ={
    base:{
      width: "max-content",
      margin: props.margin,
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

export default LoginDiv;

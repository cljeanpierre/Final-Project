import React from "react";

function FlagContainer(props) {
const styles = {
  base:{
    width: "max-content",
    margin: props.margin,
    display:"flex",
    alignItems: "center",
    backgroundColor:props.color,
  }
}

  return (
    <div style={styles.base}>
      {props.children}
    </div>
  );
}

export default FlagContainer;



import React from "react";

function FlagContainer(props) {
const styles = {
  base:{
    width: "max-content",
    display:"flex",
    backgroundColor:props.color,
    height:"max-content",
    margin: props.margin,
    position: props.position
    
  },
}

  return (
    <div style={styles.base}>
      {props.children}
    </div>
  );
}

export default FlagContainer;



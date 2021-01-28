import React from "react";

function FlagContainer(props) {
const styles = {
  base:{
    width: "100%",
    display:"flex",
    backgroundColor:props.color,
    height:"max-content",
    margin: props.margin,
    padding: props.padding
    
  },
}

  return (
    <div style={styles.base}>
      {props.children}
    </div>
  );
}

export default FlagContainer;



import React from "react";

function FlagContainer(props) {
const styles = {
  base:{
    width: "max-content",
    margin: props.margin,
    display:"flex" 
  }
}

  return (
    <div className={props.layout} style={styles.base}>
      {props.children}
    </div>
  );
}

export default FlagContainer;



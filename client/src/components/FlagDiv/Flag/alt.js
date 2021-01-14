import React from "react";
import Radium from "radium";

function Flag(props) {
  const styles ={
    base:{
      border: ".1rem dotted grey",
      boxShadow: ".5rem .5rem .5rem darkgrey",
      padding: "1rem",
      margin: props.margin
    }
  }

  return (
    <div style={styles.base}
    >
    {props.children}
    </div>
  );
}

export default Radium(Flag);
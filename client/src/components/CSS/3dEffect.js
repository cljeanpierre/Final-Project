import React from "react";

function ThreeDeffect(props) {
const styles = {
  base:{
    width: "max-content",
    margin: "1rem 1rem auto",
    border: ".2rem solid #7c9473",
    boxShadow: ".6rem .6rem .6rem darkgrey",
    borderRadius: ".2em"
  }
}

  return (
    <div style={styles.base}>
      {props.children}
    </div>
  );
}

export default ThreeDeffect;

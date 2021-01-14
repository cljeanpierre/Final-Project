import React from "react";


function Flags(props) {
const styles = {
  imgBase:{
    width: "max-content",
    margin: "5rem auto",
    display:"flex" 
  },
  divBase:{
    border: ".1rem dotted grey",
    boxShadow: ".5rem .5rem .5rem darkgrey",
    padding: "1rem",
    margin: props.margin
  }
}

  return (
    <div style={styles.divBase}>
        <img alt="img" src="flag-nl"></img>
    </div>
  );
}

export default Flags;



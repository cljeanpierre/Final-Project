import React from "react";


function Flags(props) {
const styles = {
  imgBase:{
    width: "auto",
    margin: "5rem auto",
    display:"flex",
    border: ".1rem solid",
    borderRadius: "5px"
  },
  divBase:{
    boxShadow: ".5rem .5rem .5rem darkgrey",
    margin: props.margin
  },
}

  return (
    <div style={styles.divBase}>
        <img class="hover" alt="img" src={props.flag}></img>
    </div>
  );
}

export default Flags;



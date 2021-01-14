import React from "react";

const Card = (props) => {
  const style={
    base:{
     padding: "2rem 2rem",
     margin: "2rem auto 2rem auto",
     border: ".2rem solid #7c9473",
     boxShadow: ".6rem .6rem .6rem darkgrey",
     textAlign: "center",
     borderRadius: ".2em",
     backgroundColor:props.bGcolor
    }
  }
  return (
    <div  style={style.base}>
      {props.children}
    </div>
  );
}

export default Card;



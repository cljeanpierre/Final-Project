import React from "react";
import Radium from "radium";

const Card = (props) => {
  const style={
    base:{
    
     margin: "2rem auto 2rem auto",
     border: ".2rem solid #7c9473",
     boxShadow: ".6rem .6rem .6rem darkgrey",
     textAlign: "center",
     borderRadius: ".2em",
     backgroundColor:props.bGcolor,
     fontFamily: FontAwesome;
    }
  }
  return (
    <div className="Card" style={style.base}>
      {props.children}
    </div>
  );
}

export default Radium(Card);



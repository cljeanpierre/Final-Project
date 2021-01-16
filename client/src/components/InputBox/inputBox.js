import React from "react";
import Radium from "radium"


const InputBox = (props) => {
    const style ={
        base:{ width: "max-content",
            margin: "1.5rem auto",
            padding: props.padding
        },
    }
    return(
        <div style={style.base}>
            <input  style={{
            textAlign: "center",
            fontSize: "1rem",
            border: ".1rem solid",
            boxShadow: ".1rem .1rem .1rem darkgrey",
            borderRadius: '5px',}}type="text" placeholder={props.usernamePlaceholder}
            ></input>
        </div>
    )
}
  export default Radium(InputBox);
  
  
import React from "react";


const InputBox = (props) => {
    const style ={
        base:{ width: "max-content",
            margin: "auto",
            border: ".1rem solid #cfdac8",
            boxShadow: ".1rem .1rem .1rem darkgrey",
            textAlign: "center",
        },
    }
    return(
        <div>
            <input className="InputBox" style={style.base} type="text" placeholder={props.usernamePlaceholder}></input>
        </div>
    )
}
  export default InputBox;
  
  
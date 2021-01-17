import React from "react";

const Footer = () =>{
    const style ={
        base:{
            margin: "0rem auto",
            width: "max-content",
            color: "white",
            fontSize: ".8rem"
        }
    }
    return(
        <div style={style.base}>
            <p>@ Copyright</p>
        </div>
    )
}
export default Footer;
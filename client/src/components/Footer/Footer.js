import React from "react";

const Footer = () =>{
    const style ={
        base:{
            margin: "0rem auto",
            width: "max-content",
            color: "black",
            fontSize: ".8rem",
            height:"max-content"
        }
    }
    return(
        <div style={style.base}>
            <p>Team ABDT @ Copyright</p>
        </div>
    )
}
export default Footer;
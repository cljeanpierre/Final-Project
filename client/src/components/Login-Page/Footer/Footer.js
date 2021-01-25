import React from "react";
// import { propTypes } from "react-country-flag";

const Footer = (props) =>{
    const style ={
        base:{
            margin: "0rem auto 1rem",
            width: "max-content",
            color: "black",
            fontSize: ".8rem",
            height:"max-content"
        },
        p:{
            margin: "0rem auto",
            padding: props.padding
        }
    }
    return(
        <div style={style.base}>
            <p style={style.p}>Team ABDT @ Copyright</p>
        </div>
    )
}
export default Footer;
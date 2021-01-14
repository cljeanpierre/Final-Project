import React from "react";

const FooterDiv = (props) =>{
    const style ={
        base:{
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            padding:"2rem  auto",
            margin: "2rem 0 auto"
        }
    }
    return(
        <div style={style.base}>
            {props.children}
        </div>
    )
}
export default FooterDiv;
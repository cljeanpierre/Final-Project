import React from "react";

const FooterDiv = (props) =>{
    const style ={
        base:{
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
        }
    }
    return(
        <div style={style.base}>
            {props.children}
        </div>
    )
}
export default FooterDiv;
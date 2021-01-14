import React from "react";

function BackgroundImg(props) {
  const style ={
    base:{
      width:"100%",
      height:"50%"

    },
    divBase:{
        position:"relative",
        margin: "0rem auto",
        backgroundImg:"url('https://st2.depositphotos.com/1011833/9129/i/950/depositphotos_91294236-stock-photo-vintage-world-map-background-stylization.jpg')"

      }
  }
  return (
    <div style={style.divBase}>
        {props.children}
    </div>
    
  );
}

export default BackgroundImg;
import React from "react";
import ReactCountryFlag from "react-country-flag"


const SignUpFlag= (props)=> {

  const styles ={
    divBase:{
      margin: props.margin,
      width: "5.5rem",
      height: "max-content",
    },
    imgBase:{
      width: "100%",
      height: "100%",
      border:".1rem solid transparent",
      boxShadow: ".6rem .6rem .6rem darkgrey",
      borderRadius: "15px",
    }
  }

    return (
        <div style={styles.divBase}>
            <ReactCountryFlag countryCode={props.flag}  svg style={styles.imgBase}
            />     
        </div>
    )
}
 
export default SignUpFlag





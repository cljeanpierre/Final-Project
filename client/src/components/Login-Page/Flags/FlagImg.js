import React from "react";
import ReactCountryFlag from "react-country-flag"


const FlagImg = (props)=> {

  const styles ={
    divBase:{
      margin: props.margin,
      width: "5.5rem",
      height: "max-content",
    },
    imgBase:{
      width: "auto",
      height: "auto",
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
 
export default FlagImg




// function Img(props) {
//   const styles ={
//     base:{
//       border: ".1rem dotted grey",
//       boxShadow: ".5rem .5rem .5rem darkgrey",
//     }
//   }

//   return (
//     <div styles={styles.base}>
//         <img alt="img" src={props.flag}/>
//     </div>
//   );
// }

// export default Img;
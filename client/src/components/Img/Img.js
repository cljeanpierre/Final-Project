import React from "react";
import ReactCountryFlag from "react-country-flag"


const Flags= (props)=> {

  const styles ={
    divBase:{
      boxShadow: ".5rem .5rem .5rem darkgrey",
      margin: props.margin,
      width:"max-content",
      height:"max-content"
    },
    imgBase:{
      width: "5rem",
      height: "5rem",
    },
  }

    return (
        <div style={styles.divBase}>
            <ReactCountryFlag countryCode={props.flag}  svg style={styles.imgBase}
            />     
        </div>
    )
}
 
export default Flags




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
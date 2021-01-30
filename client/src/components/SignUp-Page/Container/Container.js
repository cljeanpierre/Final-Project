import React from "react";
import Radium, { StyleRoot } from "radium";
import Compass from "../../../compass.jpg";

function Container(props) {
    const styles = {
        base: {
            backgroundColor: '#e8eae6',
            backgroundImage: `url(${Compass})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            textAlign: 'center',
            margin:props.margin,
            height: "100vh!important",
            display: "flex",
            height:"100vh",
            padding:"15px"
        }
    }
    return (
    <StyleRoot>
    <div className="container-fluid" style={styles.base}>{props.children}</div>
    </StyleRoot>
    );
}

export default Radium(Container);

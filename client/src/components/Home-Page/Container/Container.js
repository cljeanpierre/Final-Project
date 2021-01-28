import React from "react";
import Radium, { StyleRoot } from "radium";
import Globe from "../../../globe.jpg";

function Container(props) {
    const styles = {
        base: {
            
            backgroundColor: '#e8eae6',
            backgroundImage: `url(${Globe})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            textAlign: 'center',
            padding: '1rem',
            height: '100vh',
            // borderRadius: '15px',
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }
    }
    return (
    <StyleRoot>
    <div className="container-fluid overflow-auto" style={styles.base}>{props.children}</div>
    </StyleRoot>
    );
}

export default Radium(Container);

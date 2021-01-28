import React from "react";
import Radium, { StyleRoot } from "radium";

function Container(props) {
    const styles = {
        base: {
            width:"100%",
            backgroundColor: '#e8eae6',
            textAlign: 'center',
            borderRadius: '15px',
            margin:props.margin,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }
    }
    return (
    <StyleRoot>
    <div className="container-fluid" style={styles.base}>{props.children}</div>
    </StyleRoot>
    );
}

export default Radium(Container);


import React from "react";
import Radium, { StyleRoot } from "radium";

function Container(props) {
    const styles = {
        base: {
            backgroundColor: '#e8eae6',
            textAlign: 'center',
            borderRadius: '15px',
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

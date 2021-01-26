import React from "react";
import Radium, { StyleRoot } from "radium";

function Container(props) {
    const styles = {
        base: {
            backgroundColor: '#e8eae6',
            textAlign: 'center',
            borderRadius: '15px',
            margin:props.margin
        }
    }
    return (
    <StyleRoot>
    <div className="container-fluid" style={styles.base}>{props.children}</div>
    </StyleRoot>
    );
}

export default Radium(Container);


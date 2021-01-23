import React from "react";
import Radium, { StyleRoot } from "radium";

function Container(props) {
    const styles = {
        base: {
            backgroundColor: '#e8eae6',
            textAlign: 'center',
            padding: '15px',
            height: '100vh',
            borderRadius: '15px',
        
        }
    }
    return (
    <StyleRoot>
    <div className="container overflow-auto" style={styles.base}>{props.children}</div>
    </StyleRoot>
    );
}

export default Radium(Container);

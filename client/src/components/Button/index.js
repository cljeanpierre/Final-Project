import React from "react";
import Radium from "radium";

function Button(props) {
    const styles = {
        base: {
            padding: '15px',
            borderRadius: '10px',
            background: 'lightyellow',
            fontWeight: 'bold'
        
        }
    }
    return <div className="button" style={styles.base}>{props.children}</div>
}

export default Radium(Button);
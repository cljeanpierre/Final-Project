import React from "react";
import Radium from "radium";

function Button(props) {
    const styles = {
        base: {
            padding: '15px 15px 15px 15px',
            borderRadius: '10px 10px 10px 10px',
            marginBottom: "0.5em",
            background: 'lightyellow',
            fontWeight: 'bold',
            cursor: 'pointer',
            ':hover': {
                background: 'white'
            },
            ':active': {
                background: '#7c9473'
            },
            
            
        }
    }
    return <div type="button" className="btn" {...props} style={styles.base}>{props.children}</div>
}

export default Radium(Button);
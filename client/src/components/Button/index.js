import React from "react";
import Radium from "radium";

function Button(props) {
    const styles = {
        base: {
            padding: '15px 15px 15px 15px',
            borderRadius: '10px 10px 10px 10px',
            background: 'lightyellow',
            fontWeight: 'bold',
            ':hover': {
                cursor: 'pointer'
            }
        
        }
    }
    return <div className="button" {...props} style={styles.base}>{props.children}</div>
}

export default Radium(Button);
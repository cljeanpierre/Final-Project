import React from "react";
import Radium from "radium";

function Button(props) {
    const styles = {
        base: {
            padding: '0.9rem 0.9rem 0.9rem 0.9rem',
            borderRadius: '0.6rem 0.6rem 0.6rem 0.6rem',
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
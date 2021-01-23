import React from "react";
import Radium from "radium";

function Button(props) {
    const styles = {
        base: {
            padding: '0.94rem 0.94rem 0.94rem 0.94rem',
            borderRadius: '0.63rem 0.63rem 0.63rem 0.63rem',
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
import React from "react";
import Radium from "radium";

function Button(props) {
    const styles = {
        base: {
            padding: '1rem',
            borderRadius: '0.6rem',
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
            '@media (max-width:480px)': {
                  display: 'block',
                  margin: '5px',
                  width: '100%'
            }
            
        }
    }
    return <div type="button" className="button" {...props} style={styles.base}>{props.children}</div>
}

export default Radium(Button);
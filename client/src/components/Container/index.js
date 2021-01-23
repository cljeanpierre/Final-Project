import React from "react";
import Radium from "radium";

function Container(props) {
    const styles = {
        base: {
            backgroundColor: '#eeeeee',
            textAlign: 'center',
            padding: '15px',
            margin: '0',
            height: 'max-content',
            borderRadius: '15px'
        
        }
    }
    return <div className="container" style={styles.base}>{props.children}</div>
}

export default Radium(Container);

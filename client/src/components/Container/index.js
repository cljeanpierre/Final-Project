import React from "react";
import Radium from "radium";

function Container(props) {
    const styles = {
        base: {
            backgroundColor: '#eeeeee',
            textAlign: 'center',
            marginTop: '30px',
            height: 'auto',
            borderRadius: '15px',
            margin: props.margin,
            width:props.width,
            padding:props.padding
        
        }
    }
    return <div className="container" style={styles.base}>{props.children}</div>
}

export default Radium(Container);

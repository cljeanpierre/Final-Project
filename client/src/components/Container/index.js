import React from "react";
import Radium from "radium";

function Container(props) {
    const styles = {
        base: {
            backgroundColor: '#eeeeee',
            textAlign: 'center',
            padding: '25px 25px 25px 25px',
            margin: '30px 0px 0px 0px',
            height: 'auto',
            borderRadius: '15px 15px 15px 15px'
        
        }
    }
    return <div className="container" style={styles.base}>{props.children}</div>
}

export default Radium(Container);

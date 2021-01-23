import React from "react";
import Radium from "radium";

function Container(props) {
    const styles = {
        base: {
            backgroundColor: '#eeeeee',
            textAlign: 'center',
            padding: '0px',
            borderRadius: '15px',
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
            
        }
    }
    return <div className="row" style={styles.base}>{props.children}</div>
}

export default Radium(Container);

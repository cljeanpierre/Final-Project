import React from "react";
import Radium from "radium";

function Wrapper(props) {
    const styles = {
        base: {
            background: 'grey',
            textAlign: 'center',
            height: 'auto',
            margin:"0"
        }
    }
    return <div className="wrapper" style={styles.base}>{props.children}</div>
    
};

export default Radium(Wrapper);

import React from "react";
import Radium from "radium";


function Wrapper(props) {
    const styles = {
        base: {
            background: 'lightgrey',
            textAlign: 'center',
            height: '100vh'
        }
    }
    return <div className="wrapper" style={styles.base}>{props.children}</div>
    
};

export default Radium(Wrapper);

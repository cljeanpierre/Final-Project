import React from "react";
import Radium from "radium";


function Wrapper(props) {
    const styles = {
        base: {
            padding: '20px',
            background: 'grey',
            textAlign: 'center',
            height: '100vh'
        }
    }
    return <div className="wrapper" style={styles.base}>{props.children}</div>
    
};

export default Radium(Wrapper);

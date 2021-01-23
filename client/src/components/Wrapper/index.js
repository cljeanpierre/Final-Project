import React from "react";
import Radium from "radium";


function Wrapper(props) {
    const styles = {
        base: {
            paddingTop: '0rem',
            paddingLeft: '0rem',
            paddingRight: '0rem',
            paddingBottom: '0rem',
            background: 'grey',
            textAlign: 'center',
            height: '100vh'
        }
    }
    return <div className="wrapper" style={styles.base}>{props.children}</div>

};

export default Radium(Wrapper);

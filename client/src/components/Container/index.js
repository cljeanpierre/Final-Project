import React from "react";
import Radium from "radium";

function Container(props) {
    const styles = {
        base: {
            backgroundColor: '#eeeeee',
            textAlign: 'center',
            padding: '0.94rem',
            margin: '0',
            height: 'max-content',
            borderRadius: '0.94rem'

        }
    }
    return <div className="container" style={styles.base}>{props.children}</div>
}

export default Radium(Container);

import React from "react";
import Radium from "radium";

function Col(props) {
    const styles = {
        base: {
            padding: '1.6rem 1.6rem 1.6rem 1.6rem',
            background: 'grey',
            textAlign: 'center',
            fontColor: 'black',
            height: 'auto',
            borderRadius: '0.3rem 0.3rem 0.3rem 0.3rem'
        }
    }
    return <div className="col" style={styles.base}>{props.children}</div>;
}

export default Radium(Col);
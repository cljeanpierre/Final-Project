import React from "react";
import Radium from "radium";

function Row(props) {
    const styles = {
        base: {
            padding: '10px',
            background: 'lightgreen',
            textAlign: 'center',
            margin: '5px',
            borderRadius: '15px',
            marginBottom: '20px'
        }
    }
    return <div className="row" style={styles.base}>{props.children}</div>
}

export default Radium(Row);
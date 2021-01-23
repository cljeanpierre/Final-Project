import React from "react";
import Radium from "radium";

function Row(props) {
    const styles = {
        base: {
            paddingTop: '0.6rem',
            paddingLeft: '0.6rem',
            paddingRight: '0.6rem',
            paddingBottom: '0.6rem',
            background: 'lightgreen',
            textAlign: 'center',
            marginTop: '0.3rem',
            marginLeft: '0.3rem',
            marginRight: '0.3rem',
            marginBottom: '1.3rem',
            borderRadius: '0.9rem',
        }
    }
    return <div className="row" style={styles.base}>{props.children}</div>
}

export default Radium(Row);
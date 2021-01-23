import React from "react";
import Radium from "radium";

function Row(props) {
    const styles = {
        base: {
            paddingTop: '10px',
            paddingLeft:'10px',
            paddingRight:'10px',
            paddingBottom: '10px',
            background: '#cfdac8',
            textAlign: 'center',
            marginTop: '5px',
            marginLeft:'5px',
            marginRight:'5px',
            marginBottom: '20px',
            borderRadius: '15px',
        }
    }
    return <div className="row" style={styles.base}>{props.children}</div>
}

export default Radium(Row);
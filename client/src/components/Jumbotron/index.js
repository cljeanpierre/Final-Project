import React from "react";
import Radium from "radium";

function Jumbotron(props) {
    const styles = {
        base: {
            background: 'darkblue',
            color: 'white',
            textAlign: 'center',
            marginTop: '10px',
            borderRadius: '15px',
            width: props.width,
            margin: props.margin
        
        }
    }
    return <div className="jumbotron" style={styles.base}>{props.children}</div>
}

export default Radium(Jumbotron);

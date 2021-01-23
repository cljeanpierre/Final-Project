import React from "react";
import Radium from "radium";

function Jumbotron(props) {
    const styles = {
        base: {
            background: 'darkblue',
            color: 'white',
            textAlign: 'center',
            margin: '0.6rem 0rem 0rem 0rem',
            borderRadius: '0.9rem 0.9rem 0.9rem 0.9rem',
            width: props.width,
            margin: props.margin,
            border: ".1rem solid transparent",
            boxShadow: ".4rem .4rem .4rem darkgrey",

        }
    }
    return <div className="jumbotron" style={styles.base}>{props.children}</div>
}

export default Radium(Jumbotron);

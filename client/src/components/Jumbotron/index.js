import React from "react";
import Radium from "radium";

function Jumbotron(props) {
    const styles = {
        base: {
            background: '#7c9473',
            color: 'white',
            textAlign: 'center',
            borderRadius: '15px 15px 15px 15px',
            width: props.width,
            margin: props.margin,
            border: ".1rem solid transparent",
            boxShadow: ".4rem .4rem .4rem darkgrey",
            '@media (min-width: 576px)': {
                padding: '1rem'
            }    
        }
    }
    return <div className="jumbotron" style={styles.base}>{props.children}</div>
}

export default Radium(Jumbotron);

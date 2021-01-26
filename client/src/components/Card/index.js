import React from "react";
import Radium from "radium";

function Card(props) {
    const styles = {
        base: {
            backgroundColor: 'white',
            textAlign: 'center',
            padding: '0.9rem 0.9rem 0.9rem 0.9rem',
            height: 'auto',
            borderRadius: '0.9rem 0.9rem 0.9rem 0.9rem'
        }
    }
    return (

        <div className="Card" style={styles.base}>
            {props.children}
        </div>

    );
}

export default Radium(Card);
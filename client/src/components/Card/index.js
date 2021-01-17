import React from "react";
import Radium from "radium";

function Card(props) {
    const styles = {
        base: {
            backgroundColor: 'white',
            textAlign: 'center',
            padding: '15px',
            height: 'auto',
            borderRadius: '15px'
        }
    }
    return (
        
        <div className="Card" style={styles.base}>
        {props.children}
        </div>
        
    );
}

export default Radium(Card);
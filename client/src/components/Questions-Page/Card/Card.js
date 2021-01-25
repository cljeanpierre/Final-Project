import React from "react";
import Radium from "radium";

function Card(props) {
    const styles = {
        base: {
            backgroundColor: '#cfdac8',
            textAlign: 'center',
            padding: '15px 15px 15px 15px',
            height: 'auto',
            borderRadius: '1.2rem',
            border: 'none'
        }
    }
    return (
        
        <div className="card" style={styles.base}>
        {props.children}
        </div>
        
    );
}

export default Radium(Card);
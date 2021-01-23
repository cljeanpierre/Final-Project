import Radium from "radium";
import React from "react";

// This file exports both the List and ListItem components

function List(props) {
    const styles = {
        base: {
            borderRadius: '15px 15px 15px 15px',
            background: 'yellow',
            fontSize: '2rem',
        }
    }
  return (
    <div className="list-overflow-container" style={styles.base}>
      <ol className="list-group" style={styles.base}>{props.children}</ol>
    </div>
  );
}

export default Radium(List);

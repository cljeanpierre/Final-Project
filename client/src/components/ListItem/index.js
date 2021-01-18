import Radium from "radium";
import React from "react";

function ListItem({ children }) {
    const styles = {
        base: {
            background: 'yellow',
            padding: '10px 10px 10px 10px',
            display: 'list-item',
            listStylePosition: 'inside'
        }
    }
    return <li className="list-group-item" style={styles.base}>{children}</li>;
}
export default Radium(ListItem);
import React from "react";
import '../App.css';
function Error (props) {
    return(
        <div className="error">
            {props.children}
        </div>
    )
}

export default Error;
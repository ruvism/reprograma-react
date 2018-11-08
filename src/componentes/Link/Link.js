import React from "react";
import {Link as RouterLink} from "react-router-dom";
import "./Link.css";

function Link(props) {
    return (<RouterLink className="link" to={props.url}>
        {props.children}
    </RouterLink>);
}

export default Link;
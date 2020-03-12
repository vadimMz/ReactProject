import React from "react";
import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path} className={styles.Dialog}> {props.name}</NavLink>
        </div>
    )
};

export default Dialog;
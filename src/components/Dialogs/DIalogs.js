import React from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = '/dialogs/'+props.id;
    return (
        <div>
            <NavLink to={path} className={styles.Dialog}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.Message}> {props.message}</div>)
}


const Dialogs = (props) => {
    return (
        <div className={styles.Dialogs}>
            <div className={styles.DialogNames}>
                <Dialog id='1' name='Vadim'/>
                <Dialog id='2' name='Kate'/>
                <Dialog id='3' name='Putin'/>
                <Dialog id='4' name='Vasily'/>
                <Dialog id='5' name='Oleg'/>

            </div>
            <div className={styles.Messages}>

                <Message message="Hey"/>
                <Message message="how are you?"/>
                <Message message="OK"/>
                <Message message="Go"/>

            </div>

        </div>
    )
}
export default Dialogs;
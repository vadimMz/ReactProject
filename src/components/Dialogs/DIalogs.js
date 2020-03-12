import React from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

let arrOfDialogs = [
    {id: 1, name: 'Vadim'},
    {id: 2, name: 'Kate'},
    {id: 3, name: 'Putin'},
    {id: 4, name: 'Vasily'},
    {id: 5, name: 'Oleg'}

];

let arrOfMessages = [
    {id: 1, message: 'Hey'},
    {id: 2, message: 'how are you?'},
    {id: 3, message: 'OK'},
    {id: 4, message: 'Go'},
];


const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path} className={styles.Dialog}> {props.name}</NavLink>
        </div>
    )
};

const FillDialogs = arrOfDialogs.map(function (elem) {
    return (
        <Dialog id={elem.id} name={elem.name}/>
    )

});


const Message = (props) => {
    return (
        <div className={styles.Message}> {props.message}</div>)
};

const FillMessages = arrOfMessages.map(function (elem) {
    return (
        <Message message={elem.message}/>
    )

});

const Dialogs = (props) => {
    return (
        <div className={styles.Dialogs}>
            <div className={styles.DialogNames}>
                {FillDialogs}
            </div>

            <div className={styles.Messages}>
                {FillMessages}
            </div>

        </div>
    )
};
export default Dialogs;
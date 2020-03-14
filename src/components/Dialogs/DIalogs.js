  import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/DIalog";
import Message from "./Message/Message";


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

const FillDialogs = arrOfDialogs.map(function (elem) {
    return (
        <Dialog id={elem.id} name={elem.name}/>
    )

});

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
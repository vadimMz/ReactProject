import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/DIalog";
import Message from "./Message/Message";



const Dialogs = (props) => {

    const FillDialogs = props.arrOfDialogs.map(elem => {
        return (
            <Dialog id={elem.id} name={elem.name}/>
        )

    });

    const FillMessages = props.arrOfMessages.map(elem => {
        return (
            <Message message={elem.message}/>
        )

    });
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
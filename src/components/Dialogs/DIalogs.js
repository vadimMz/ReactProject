import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/DIalog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let textAreaElement = React.createRef();






    const FillDialogs = props.dialogs.map(elem => {
        return (
            <Dialog id={elem.id} name={elem.name}/>
        )

    });

    const FillMessages = props.messages.map(elem => {
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
                <div>
                    <textarea ref={textAreaElement}></textarea>

                    <div className={styles.NewMessageInput}>
                        <button className= {styles.addNewMessageButton}> Add message</button>
                    </div>
                </div>
            </div>



        </div>
    )
};
export default Dialogs;
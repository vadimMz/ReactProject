import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let textAreaElement = React.createRef();
    const FillDialogs = props.dialogs.map(elem => {
        return (
            <Dialog id={elem.id} name={elem.name} key={elem.id}/>
        )
    });
    const FillMessages = props.messages.map(elem => {
        return (
            <Message message={elem.message} key={elem.id}/>
        )
    });

    let AddMessage = () => {
        let text = textAreaElement.current.value;
        props.AddMessage(text);
    }
    let UpdateMessageText = () => {

        let text = textAreaElement.current.value;
        props.UpdateMessageText(text);
    }

    return (
        <div className={styles.Dialogs}>
            <div className={styles.DialogNames}>
                {FillDialogs}
            </div>

            <div className={styles.Messages}>
                {FillMessages}
                <div>
                    <textarea ref={textAreaElement} value={props.newMessageText} onChange={UpdateMessageText}/>
                    <div className={styles.NewMessageInput}>
                        <button className={styles.addNewMessageButton}
                                onClick={AddMessage}
                                onChange={UpdateMessageText}
                        > Add message
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
};
export default Dialogs;
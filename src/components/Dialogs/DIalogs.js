import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/DIalog";
import Message from "./Message/Message";
import {AddMessageActionCreator, AddUpdateMessageTextActionCreator} from "../../redux/dialogs-reducer";


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


    let AddMessage = () => {
        let text = textAreaElement.current.value;
        let action = AddMessageActionCreator(text);

        props.dispatch(action);
    }


    let UpdateMessageText = () => {
        let text = textAreaElement.current.value;
        let action = AddUpdateMessageTextActionCreator(text);
        props.dispatch(action);
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
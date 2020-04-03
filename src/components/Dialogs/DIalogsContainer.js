import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/DIalog";
import Message from "./Message/Message";
import {AddMessageActionCreator, AddUpdateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./DIalogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let AddMessage = (text) => {
        let action = AddMessageActionCreator(text);
        props.store.dispatch(action);
    }


    let UpdateMessageText = (text) => {
        let action = AddUpdateMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Dialogs AddMessage={AddMessage}
                     UpdateMessageText={UpdateMessageText}
                     dialogs={state.dialogsPage.dialogs}
                     messages={state.dialogsPage.messages}
                     newMessageText={state.dialogsPage.newMessageText}
    />)
};
export default DialogsContainer;
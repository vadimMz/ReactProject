import React from "react";
import {AddMessageActionCreator, AddUpdateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./DIalogs";
import StoreContext from "../../redux/store-context";


const DialogsContainer = (props) => {

    return (<StoreContext.Consumer>
            {
                (value) => {
                    let state = value.getState();
                    let AddMessage = (text) => {
                        let action = AddMessageActionCreator(text);
                        props.store.dispatch(action);
                    }
                    let UpdateMessageText = (text) => {
                        let action = AddUpdateMessageTextActionCreator(text);
                        props.store.dispatch(action);
                    }
                    return (
                        <Dialogs AddMessage={AddMessage}
                                 UpdateMessageText={UpdateMessageText}
                                 dialogs={state.dialogsPage.dialogs}
                                 messages={state.dialogsPage.messages}
                                 newMessageText={state.dialogsPage.newMessageText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
};
export default DialogsContainer;


/*import React from "react";
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
export default DialogsContainer;*/
//StoreContext
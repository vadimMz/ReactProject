import React from "react";
import {AddMessageActionCreator, AddUpdateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./DIalogs";
import StoreContext from "../../redux/store-context";
import {connect} from "react-redux";



const mapDispatchToProps = (dispatch) => {
    let AddMessage = (text) => {
        let action = AddMessageActionCreator(text);
        dispatch(action);
    }
    let UpdateMessageText = (text) => {
        let action = AddUpdateMessageTextActionCreator(text);
        dispatch(action);
    }
    return {
        AddMessage: () => AddMessage, //добавил обертку чтобы не терялся контект
        UpdateMessageText:  () => UpdateMessageText //добавил обертку чтобы не терялся контект
    }

}

const mapStateToProps = (state) => {
    return {
        dialogs : state.dialogsPage.dialogs,
        messages : state.dialogsPage.messages,
        newMessageText : state.dialogsPage.newMessageText
    }

}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;






/*
const mapDispatchToProps = (dispatch) => {
    let AddMessage = (text) => {
        let action = AddMessageActionCreator(text);
        dispatch(action);
    }
    let UpdateMessageText = (text) => {
        let action = AddUpdateMessageTextActionCreator(text);
        dispatch(action);
    }
    return {
        AddMessage: {AddMessage},
        UpdateMessageText: {UpdateMessageText}
    }
}

const mapStateToProps = (state) => {
    return {
        dialogs : state.dialogsPage.dialogs,
        messages : state.dialogsPage.messages,
        newMessageText : state.dialogsPage.newMessageText
    }

}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


*
*
* */







/*const DialogsContainer = (props) => {

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
};*/











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
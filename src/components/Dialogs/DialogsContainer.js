import React from "react";
import {AddMessageActionCreator, AddUpdateMessageTextActionCreator} from "../../redux/dialogs-reducer";

import StoreContext from "../../redux/store-context";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


/*
const mapDispatchToProps = (dispatch) => {
    let AddMessage = (text) => {
        let action = AddMessageActionCreator(text);
        dispatch(action);
    }
    let UpdateMessageText = (text) => {
        debugger;
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
*/
const mapDispatchToProps = (dispatch) => {
    return {
        AddMessage: (text) => {
            let action = AddMessageActionCreator(text);
            dispatch(action);

        }, //добавил обертку чтобы не терялся контект
        UpdateMessageText: (text) => {
            debugger
            let action = AddUpdateMessageTextActionCreator(text);
            dispatch(action);
        } //добавил обертку чтобы не терялся контект
    }
}
const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}


let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


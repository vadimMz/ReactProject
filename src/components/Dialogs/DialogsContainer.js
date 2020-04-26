import React from "react";
import {AddMessageActionCreator, AddUpdateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const mapDispatchToProps = (dispatch) => {
    return {
        AddMessage: (text) => {
            let action = AddMessageActionCreator(text);
            dispatch(action);

        }, //добавил обертку чтобы не терялся контект
        UpdateMessageText: (text) => {
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


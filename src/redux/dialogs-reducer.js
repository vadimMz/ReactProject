const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {


    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.messageText //
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
        case UPDATE_MESSAGE:
            state.newMessageText = action.messageText;
        default:
            return state;
    }
};


export const AddMessageActionCreator = (text) => {
    return {
        type: ADD_MESSAGE,
        messageText: text
    }
};
export const AddUpdateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        messageText: text
    }
};

export default dialogsReducer;

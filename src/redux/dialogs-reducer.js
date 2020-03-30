const dialogsReducer = (state, action) => {

    const ADD_MESSAGE = 'ADD-MESSAGE';
    const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: action.messageText //
            };
            state.messages.push(newMessage);
            state.newMessageText = '';

        } else if (action.type === UPDATE_MESSAGE) {
            state.newMessageText = action.messageText;
        }

        return state;
    };
export default dialogsReducer;

const dialogsReducer = (state, action) => {

    const ADD_MESSAGE = 'ADD-MESSAGE';
    const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


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
export default dialogsReducer;

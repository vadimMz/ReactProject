const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


let INITIAL_PARAM = {
    dialogs: [
        {id: 1, name: 'Vadim'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Putin'},
        {id: 4, name: 'Vasily'},
        {id: 5, name: 'Oleg'}
    ],
    messages: [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'OK'},
        {id: 4, message: 'Go'},
    ],
    newMessageText: ""  //Text from textarea in Dialogs/message.
};


const dialogsReducer = (state = INITIAL_PARAM, action) => {



    switch (action.type) {
        case ADD_MESSAGE: {

            return {
                ...state,
                messages: [...state.messages,{id:5, message: action.messageText}],
                newMessageText: ''
            };
        }
        case UPDATE_MESSAGE: {
            /*let stateCopy = {...state};
            stateCopy.newMessageText = action.messageText;*/
            return {
                ...state,
                newMessageText: action.messageText
            };
        }
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

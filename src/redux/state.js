const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Привет!"},
                {id: 2, message: "Че не отвечаешь?!"},
                {id: 3, message: "Купи паскод!"}
            ],
            newPostText: "" //Text from textarea in profile.
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Alexey'},
                {id: 3, name: 'Pauleg'}
            ]
        }
    },
    setState(state) {
        this._state = state;
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: action.postMessage //
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-POST') {
            this._state.profilePage.newPostText = action.NewText;
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: action.messageText //
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.messageText;
            this._callSubscriber(this._state);
        }
    },
};

export const AddPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        postMessage: text
    }
};
export const UpdatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        NewText: text
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

export default store;
window.store = store;


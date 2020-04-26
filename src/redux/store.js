import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
/*
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
        this._state.profilePage = usersReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);
    },
};
*/
/*
export default store;
window.store = store;
*/
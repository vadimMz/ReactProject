
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
    getState(){
     return this._state;
    },

    _callSubscriber(){
        console.log('state changed');
    },
    AddPost(postMessage){
        let newPost = {
            id: 4,
            message: postMessage
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    UpdatePost(NewText){
        this._state.profilePage.newPostText = NewText;
        this._callSubscriber( this.state);
    },
    AddMessage(messageText){
        let newMessage = {
            id: 5,
            message: messageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber( this.state);
    },
    UpdateMessage(text){
        this._state.dialogsPage.newMessageText = text;
        this._callSubscriber( this.state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }
};

export default store;
window.store = store;


/*
let  _callSubscriber = () => {
    console.log('state changed');
}

export const AddPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    _callSubscriber(state);
};
export const UpdatePost = (NewText) => {
    state.profilePage.newPostText = NewText;
    _callSubscriber(state);
};
export const AddMessage = (messageText) => {
    let newMessage = {
        id: 5,
        message: messageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    _callSubscriber(state);
};
export const UpdateMessage = (text) => {
    state.dialogsPage.newMessageText = text;
    _callSubscriber(state);
};

export let subscribe  = (observer) => {
    _callSubscriber = observer;
}


let state = {
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
};
export default state;*/

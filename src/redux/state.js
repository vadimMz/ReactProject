import {rerenderEntireTree} from "../render";

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
        newMessageText: ""
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Alexey'},
            {id: 3, name: 'Pauleg'}
        ]
    }
};

export let AddPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};


export let UpdatePost = (NewText) => {
    state.profilePage.newPostText = NewText;
    rerenderEntireTree(state);
};

export let AddMessage = (messageText) => {
    let newMessage = {
        id: 5,
        message: messageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export let UpdateMessage = (text) => {
    state.dialogsPage.newMessageText = text;
    rerenderEntireTree(state);
};


export default state;
let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Привет!"},
            {id: 2, message: "Че не отвечаешь?!"},
            {id: 3, message: "Купи паскод!"}
        ]
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
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Alexey'},
            {id: 3, name: 'Pauleg'}
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage
    };
    state.profilePage.posts.push(newPost);
};
export default state;
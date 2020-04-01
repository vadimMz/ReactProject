const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let INITIAL_PARAM = {
        posts: [
            {id: 1, message: "Привет!"},
            {id: 2, message: "Че не отвечаешь?!"},
            {id: 3, message: "Купи паскод!"}
        ],
        newPostText: "" //Text from textarea in profile.
}

const profileReducer = (state = INITIAL_PARAM, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.postMessage //
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST:
            state.newPostText = action.NewText;
        default:
            return state;
    }
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


export default profileReducer;
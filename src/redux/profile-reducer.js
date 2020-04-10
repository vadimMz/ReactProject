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
    let stateCopy = {...state};
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.postMessage //
            };

            stateCopy.posts = {...state.posts};
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;

        case UPDATE_POST:
            stateCopy.newPostText = action.NewText;
            return stateCopy;
        default:
            return stateCopy;
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
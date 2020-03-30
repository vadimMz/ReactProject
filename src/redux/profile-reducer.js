const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.postMessage //
            };
            state.posts.push(newPost);
            state.newPostText = '';
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
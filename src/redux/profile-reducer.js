const profileReducer = (state, action) => {
    const ADD_POST = 'ADD-POST';
    const UPDATE_POST = 'UPDATE-POST';

    if (action.type === ADD_POST) {
        let newPost = {
            id: 4,
            message: action.postMessage //
        };
        state.posts.push(newPost);
        state.newPostText = '';

    } else if (action.type === UPDATE_POST) {
        state.newPostText = action.NewText;
    }
    return state;
};
export default profileReducer;
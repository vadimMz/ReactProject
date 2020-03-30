const profileReducer = (state, action) => {
    const ADD_POST = 'ADD-POST';
    const UPDATE_POST = 'UPDATE-POST';

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


export default profileReducer;
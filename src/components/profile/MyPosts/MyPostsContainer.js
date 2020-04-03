import React from 'react';
import {AddPostActionCreator, UpdatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let AddPost = (text) => {
        let action = AddPostActionCreator(text);
        props.store.dispatch(action);
    }

    let UpdatePostText = (text) => {
        let action = UpdatePostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return ( <MyPosts UpdatePostText={UpdatePostText}
                      AddPost={AddPost}
                      posts = {state.profilePage.posts}
                      newPostText = {state.profilePage.newPostText}
    /> );
}

export default MyPostsContainer;

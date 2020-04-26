import React from 'react';
import {AddPostActionCreator, UpdatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../redux/store-context";
import {connect} from "react-redux";


/*
const UsersContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (value) => {
                    let state = value.getState();
                    let AddPost = (text) => {
                        let action = AddPostActionCreator(text);
                        props.store.dispatch(action);
                    }
                    let UpdatePostText = (text) => {
                        let action = UpdatePostTextActionCreator(text);
                        props.store.dispatch(action);
                    }

                    return (
                        <Users
                            UpdatePostText={UpdatePostText}
                            AddPost={AddPost}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                        />
                    )
                }
            }

        </StoreContext.Consumer>

    );
};
*/


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        UpdatePostText: (text) => {
            let action = UpdatePostTextActionCreator(text);
            dispatch(action);
        }, //
        AddPost: (text) => {
            let action = AddPostActionCreator(text);
            dispatch(action)
        } //
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


/*
import React from 'react';
import {AddPostActionCreator, UpdatePostTextActionCreator} from "../../../redux/profile-reducer";
import Users from "./Users";


const UsersContainer = (props) => {
    let state = props.store.getState();
    let AddPost = (text) => {
        let action = AddPostActionCreator(text);
        props.store.dispatch(action);
    }
    let UpdatePostText = (text) => {
        let action = UpdatePostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Users
            UpdatePostText={UpdatePostText}
            AddPost={AddPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
}

export default UsersContainer;
*/

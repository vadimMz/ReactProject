import React from 'react';
import '../../App.css';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    debugger
    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts posts = {props.posts}
                     dispatch = {props.dispatch}
                     newPostText = {props.newPostText}
/*                   addPost = {props.addPost}
                     updatePost = {props.updatePost}*/
            />
        </div>
    );
}

export default Profile;

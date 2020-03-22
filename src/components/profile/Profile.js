import React from 'react';
import '../../App.css';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts posts = {props.posts}
                     addPost = {props.addPost}
                     newPostText = {props.newPostText}
                     updatePost = {props.updatePost}/>
        </div>
    );
}

export default Profile;

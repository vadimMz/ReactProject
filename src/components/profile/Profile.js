import React from 'react';
import '../../App.css';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>
    );
}

export default Profile;

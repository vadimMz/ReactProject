import React from 'react';
import '../../App.css';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;

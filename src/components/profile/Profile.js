import React from 'react';
import '../../App.css';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

function Profile() {
    return (
        <div className={styles.profile}>
            <div>
                <img alt = 'PicProfile'
                    src='https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg'/>
            </div>

            <div className={styles.ava}>
                <img alt = 'Avatar'
                    src='https://sun9-28.userapi.com/ouF4IZc1Btj05dmlpJXd9XQNpsiaDS8JKtnTGw/1CZAUd4yO9A.jpg?ava=1'/>
                description
            </div>
            <MyPosts/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    );
}

export default Profile;

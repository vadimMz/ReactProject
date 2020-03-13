import React from 'react';
import '../../App.css';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let arrayOfPosts = [
    {message: "Привет!"},
    {message: "Че не отвечаешь?!"},
    {message: "Купи паскод!"}

];

let props = arrayOfPosts;

function Profile(props) {
    let x = arrayOfPosts;
    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts props={x}/>
        </div>
    );
}

export default Profile;

import React from 'react';
//import '../../../App.css';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={styles.MyPosts}>
            <div>
                <textarea></textarea>
            </div>

            <div>
                <button>Send</button>
            </div>

            <Post message="Привет!"/>
            <Post message="Че не отвечаешь?"/>
            <Post message="Купи паскод"/>

        </div>
    );
}

export default MyPosts;

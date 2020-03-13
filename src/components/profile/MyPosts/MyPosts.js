import React from 'react';
//import '../../../App.css';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

let arrayOfPosts = [
    {message: "Привет!"},
    {message: "Че не отвечаешь?!"},
    {message: "Купи паскод!"}

];

let FillPost = arrayOfPosts.map(function (elem) {
    return (
        <Post message={elem.message}/>
    )
});

function MyPosts() {
    return (
        <div className={styles.MyPosts}>
            <div>
                <textarea></textarea>
            </div>

            <div>
                <button>Send</button>
            </div>
            {FillPost}
        </div>
    );
}

export default MyPosts;

import React from 'react';
//import '../../../App.css';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let FillPost = props.arrayOfPosts.map(elem => {
        return (
            <Post message={elem.message}/>
        )
    });
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

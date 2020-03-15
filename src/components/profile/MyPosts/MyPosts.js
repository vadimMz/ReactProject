import React from 'react';
//import '../../../App.css';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let FillPost = props.posts.map(elem => <Post message={elem.message}/>);

    return (
        <div className={styles.MyPosts}>
            <div>
                <textarea/>
            </div>

            <div>
                <button>Send</button>
            </div>
            {FillPost}
        </div>
    );
}

export default MyPosts;

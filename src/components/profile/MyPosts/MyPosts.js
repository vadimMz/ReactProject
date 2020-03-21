import React from 'react';
//import '../../../App.css';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let FillPost = props.posts.map(elem => <Post message={elem.message}/>);
    let newPostElement = React.createRef();

    let AddPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={styles.MyPosts}>
            <div>
                <textarea ref = {newPostElement}></textarea>
            </div>

            <div>
                <button onClick={AddPost}>Send</button>
            </div>
            {FillPost}
        </div>
    );
}

export default MyPosts;

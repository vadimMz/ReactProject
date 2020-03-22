import React from 'react';
//import '../../../App.css';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import Profile from "../Profile";

//newPostText = {props.newPostText}
// updatePost = {props.updatePost}
const MyPosts = (props) => {
    let FillPost = props.posts.map(elem => <Post message={elem.message}/>);
    let newPostElement = React.createRef();

    let AddPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);

    }

    let UpdatePostText = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
    }

    return (
        <div className={styles.MyPosts}>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={UpdatePostText}  />
            </div>

            <div>
                <button onClick={AddPost}>Send</button>
            </div>
            {FillPost}
        </div>
    );
}

export default MyPosts;

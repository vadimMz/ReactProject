import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    let FillPost = props.posts.map(elem => <Post message={elem.message}/>);
    let newPostElement = React.createRef();

    let AddPost = () => {
        let text = newPostElement.current.value;
       //let action = AddPostActionCreator(text);
        props.AddPost(text);
    }

    let UpdatePostText = () => {
        let text = newPostElement.current.value;
        props.UpdatePostText(text);
        /*props.newPostText(text);*/

    }

    return (
        <div className={styles.MyPosts}>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={UpdatePostText}
                          posts = {props.posts}
                />
            </div>

            <div>
                <button onClick={AddPost}>Send</button>
            </div>
            {FillPost}
        </div>
    );
}

export default MyPosts;


/*
import React from 'react';
//import '../../../App.css';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import Profile from "../Profile";
import {AddPostActionCreator, UpdatePostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let FillPost = props.posts.map(elem => <Post message={elem.message}/>);
    let newPostElement = React.createRef();

    let AddPost = () => {
        let text = newPostElement.current.value;
        let action = AddPostActionCreator(text);
        props.dispatch(action)
    }

    let UpdatePostText = () => {
        let text = newPostElement.current.value;
        let action = UpdatePostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={styles.MyPosts}>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={UpdatePostText}/>
            </div>

            <div>
                <button onClick={AddPost}>Send</button>
            </div>
            {FillPost}
        </div>
    );
}

export default MyPosts;
* */
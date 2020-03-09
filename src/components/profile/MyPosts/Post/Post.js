import React from 'react';
//import '../../App.css';
import styles from './Post.module.css';


function Post(props) {
    return (
        <div className={styles.post}>
            <img alt = 'ava'
                src = 'https://sun9-45.userapi.com/c625429/v625429417/cd06/v469J-YkJzQ.jpg'/>
            <span>{props.message}</span>
        </div>
    );
}

export default Post;

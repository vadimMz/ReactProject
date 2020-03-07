import React from 'react';
//import '../../../App.css';
import styles from './MyPosts.module.css';

function MyPosts() {
    return (
        <div className={styles.MyPosts}>
            <textarea></textarea>
            <button>Send</button>

        </div>
    );
}

export default MyPosts;

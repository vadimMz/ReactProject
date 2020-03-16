import React from 'react';
import styles from './SidebarItemFriend.module.css';
import {NavLink} from "react-router-dom";

function SidebarItemFriend(props) {
    return (
            <div className={styles.item}>
                <div className={styles.friendAva}></div>
                <div className={styles.friendName}>{props.Name}</div>
            </div>
    );
}

export default SidebarItemFriend;

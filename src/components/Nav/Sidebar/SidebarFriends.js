import React from 'react';
import styles from './SidebarFriends.module.css';
import {NavLink} from "react-router-dom";
import SidebarItemFriend from "./SidebarItemFriend/SidebarItemFriend";
import Post from "../../profile/MyPosts/Post/Post";

function SidebarFriends(props) {

    let FillSidebarFriends = props.state.sidebar.friends.map(elem => <SidebarItemFriend name={elem.name}/>);
    return (
        <div className={styles.sidebar}>
            {FillSidebarFriends}
        </div>
    );
}

export default SidebarFriends;

import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import SidebarItemFriend from "./SidebarItemFriend/SidebarItemFriend";
import Post from "../../profile/MyPosts/Post/Post";

function Sidebar(props) {
    let FillSidebarFriends =  props.name.map(elem => <SidebarItemFriend name={elem.name}/>);
    return (
        <div className={styles.sidebar}>
            {FillSidebarFriends}
        </div>
    );
}

export default Sidebar;

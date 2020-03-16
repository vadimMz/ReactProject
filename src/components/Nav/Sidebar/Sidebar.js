import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import SidebarItemFriend from "./SidebarItemFriend/SidebarItemFriend";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarItemFriend Name='Andrew'/>
            <SidebarItemFriend Name='Andrew'/>
            <SidebarItemFriend Name='Andrew'/>
        </div>
    );
}

export default Sidebar;

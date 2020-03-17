import React from 'react';
import styles from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

function Nav(props) {

    return (
        <nav className={styles.nav}>


            <div className={styles.item}>
                <NavLink to='/Profile' activeClassName={styles.active}>Profile</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to='/Dialogs' activeClassName={styles.active}>Dialogs</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to='/Messages' activeClassName={styles.active}>Messages</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to='/News' activeClassName={styles.active}>News</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to='/Music' activeClassName={styles.active}>Music</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to='/Settings' activeClassName={styles.active}>Settings</NavLink>
            </div>

            <div className={styles.item + " " + styles.sidebar}>
                <NavLink to='/Friends' activeClassName={styles.active}>Friends </NavLink>
            </div>


            <Sidebar name={props.name}/>
        </nav>
    );
}

export default Nav;

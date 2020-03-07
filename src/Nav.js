import React from 'react';
import styles from './Nav.module.css';

function Nav() {
    return (
        <nav className={styles.nav}>
            <div className = {styles.item}>
                <a>Profile</a>
            </div>

            <div className = {styles.item}>
                <a>Messages</a>
            </div>

            <div className = {styles.item}>
                <a>News</a>
            </div>

            <div className = {styles.item}>
                <a>Music</a>
            </div>

            <div className = {styles.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Nav;

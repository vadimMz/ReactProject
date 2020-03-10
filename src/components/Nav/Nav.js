import React from 'react';
import styles from './Nav.module.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className={styles.nav}>


            <div className = {styles.item}>
                <Link to='/Profile' path ='Profile'>Profile</Link>
            </div>

            <div className = {styles.item}>
                <Link to='/Dialogs' path ='Dialogs'>Dialogs</Link>
            </div>

            <div className = {styles.item}>
                <Link to='/Messages' path ='Messages'>Messages</Link>
            </div>

            <div className = {styles.item}>
                <Link to='/News' path ='News'>News</Link>
            </div>

            <div className = {styles.item}>
                <Link to='/Music' path ='Music'>Music</Link>
            </div>

            <div className = {styles.item}>
                <Link to='/Settings' path ='Settings'>Settings</Link>
            </div>
        </nav>
    );
}

export default Nav;

import React from "react";
import  styles from './Header.module.css';

function Header() {
    return (
            <header className={styles.header}>
                <img src='https://s2.logaster.com/static/v3/img/products/logo.png'/>
            </header>
    );
}

export default Header;
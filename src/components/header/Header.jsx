import React from 'react';
import classes from './Header.module.css';
import { RiDashboardLine } from "react-icons/ri";

function Header(props) {
    return (
        <header {...props} className={classes.header}>
            <h1>My Todo</h1>

            <RiDashboardLine />  
        </header>
    );
}

export default Header;
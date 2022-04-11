import React from 'react';
// Components
import Text from '../../UI/text/Text';
// Styles
import classes from './Header.module.css';

/**
 * Header
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (props) => {
    return (
        <header {...props} className={classes.header}>
            <Text name={'h1'}>My Todos - {props.title}</Text>
        </header>
    );
}

export default Header;
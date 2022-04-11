import React from 'react';
// Styles
import classes from './Header.module.css';
// Components
import Text from '../../UI/text/Text';

/**
 * Header
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Header(props) {
    return (
        <header {...props} className={classes.header}>
            <Text name={'h1'}>My Todos</Text>
        </header>
    );
}

export default Header;
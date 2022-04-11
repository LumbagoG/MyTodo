// Imports
import React from 'react';
import classes from './BtnSidebar.module.css';

/**
 * Button component
 * @param children
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Btn({children, ...props}) {
    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    );
}

export default Btn;
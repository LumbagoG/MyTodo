// Imports
import React from 'react';
import classes from './BtnSidebar.module.css';

function Btn({children, ...props}) {
    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    );
}

export default Btn;
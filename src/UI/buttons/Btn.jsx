// Imports
import React from 'react';
import classes from './BtnSidebar.module.css';
import {Link} from 'react-router-dom';

/**
 * Button UI component
 * @param children - Children
 * @param props - Props
 * @param link - Link href
 * @returns {JSX.Element}
 * @constructor
 */
const Btn = ({children, ...props}) => {
    const renderButtons = (link) => {
        if (link) {
            return (
                <Link to={`${props.link}`}>
                    <button {...props} className={classes.btn}>
                        {children}
                    </button>
                </Link>
            )
        } else {
            return (
                <button {...props} className={classes.btn}>
                    {children}
                </button>
            )
        }
    }
    
    return (
        renderButtons(props.link)
    );
}

export default Btn;
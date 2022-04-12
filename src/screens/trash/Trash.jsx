import React from 'react';
// Components
import Header from '../../components/header/Header';
// Styles
import classes from './Trash.module.css';

/**
 * Trash screen component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Trash = (props) => {
    return (
        <div {...props} className={classes.trash}>
          <Header title='Trash'/>
          
        </div>
    );
}

export default Trash;
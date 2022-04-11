import React from 'react';
// Components
// Styles
import classes from './Trash.module.css';
import Header from '../../components/header/Header';

function Trash(props) {
    return (
        <div {...props} className={classes.trash}>
          <Header title='Trash'/>
          
        </div>
    );
}

export default Trash;
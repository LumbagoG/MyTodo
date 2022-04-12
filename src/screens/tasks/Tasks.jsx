import React from 'react';
// Components
import Header from '../../components/header/Header';
// Styles
import classes from './Tasks.module.css';

/**
 * Task screen component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Tasks = (props) => {
    return (
        <div {...props} className={classes.tasks}>
          <Header title='Tasks'/>
          
        </div>
    );
}

export default Tasks;
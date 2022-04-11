import React from 'react';
// Components
// Styles
import classes from './Tasks.module.css';
import Header from '../../components/header/Header';

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
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Components
import Tasks from '../tasks/Tasks';
import Sidebar from '../../components/sidebar/Sidebar';
import Trash from '../trash/Trash';
// Styles
import classes from './App.module.css';

/**
 * App (main component)
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  return (
      <React.Fragment>
        
        <Router>
          
          <Sidebar />
          
          <div className={classes.app}>
            <Routes>
              <Route exact path="/" element={<Tasks />} />
              <Route exact path="/trash" element={<Trash />} />
              <Route path="/*" element={<h3>404 - Not found</h3>} />
            </Routes>
          </div>
          
          
        </Router>
        
      </React.Fragment>
  );
}

export default App;
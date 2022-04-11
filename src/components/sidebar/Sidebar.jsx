import React from 'react';
import {AiOutlineCarryOut, AiOutlineMenu} from 'react-icons/ai';
import {MdOutlineNightlight, MdOutlineRestoreFromTrash} from 'react-icons/md';
// Components
import BtnSidebar from '../../UI/buttons/Btn';
// Styles
import classes from './Sidebar.module.css';

/**
 * Sidebar component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Sidebar = (props) => {
    return (
        <aside {...props} className={classes.sidebar}>

            <div className={classes.sidebar__menu}>
                <BtnSidebar>
                    <AiOutlineMenu />
                </BtnSidebar>
            </div>

            <div className={classes.sidebar__pages}>
                <BtnSidebar link='/'>
                    <AiOutlineCarryOut />
                </BtnSidebar>

                <BtnSidebar link='trash'>
                    <MdOutlineRestoreFromTrash />
                </BtnSidebar>
            </div>

            <div className={classes.sidebar__theme}>
                <BtnSidebar>
                    <MdOutlineNightlight />
                </BtnSidebar>
            </div>
        
        </aside>
    );
}

export default Sidebar;
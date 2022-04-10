import React from 'react';
import { AiOutlineMenu, AiOutlineCarryOut } from "react-icons/ai";
import { MdOutlineNightlight, MdOutlineRestoreFromTrash } from "react-icons/md";
// Components
import BtnSidebar from '../../UI/buttons/BtnSidebar';
// Css
import classes from './Sidebar.module.css';

function Sidebar(props) {
    return (
        <aside {...props} className={classes.sidebar}>

            <div className={classes.sidebar__menu}>
                <BtnSidebar>
                    <AiOutlineMenu />
                </BtnSidebar>
            </div>

            <div className={classes.sidebar__pages}>
                <BtnSidebar>
                    <AiOutlineCarryOut />
                </BtnSidebar>

                <BtnSidebar>
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
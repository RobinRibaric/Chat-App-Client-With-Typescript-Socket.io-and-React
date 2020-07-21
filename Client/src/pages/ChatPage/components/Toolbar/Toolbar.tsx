import React from 'react';

import Hamburger from '../../Mobile/components/HamburgerMenu/Hamburger';
import LogoutButton from './LogoutBtn/LogoutButton';
import './Toolbar.css';

interface Props {
    logout: () => void;
    toogleSideDrawer: () => void;

}

const Toolbar: React.FC<Props> = ({logout, toogleSideDrawer}) => (
    <div className="Info">
        <div className="left-Inner-Container">
            <Hamburger toogleSideDrawer={toogleSideDrawer}/>
            <h3 className="chatbox-header">ChatBox</h3>
        </div>
        <div className="right-Inner-Container">
            <LogoutButton logout={logout}/>
        </div>

    </div>
);

export default Toolbar;
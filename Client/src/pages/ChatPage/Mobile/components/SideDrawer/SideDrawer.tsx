import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';

import LogoutButton from '../../../components/Toolbar/LogoutBtn/LogoutButton';
import './SideDrawer.css';

interface Props {
    logout: () => void;
    sideDrawerOpen: boolean;
}

const SideDrawer: React.FC<Props> = ({logout, sideDrawerOpen}) => {
    const usersList = useSelector((state: RootState) => state.UsersReducer.users);   
    
    return(
        <div className={sideDrawerOpen ? "sidedrawer open" : "sidedrawer"}>
            <h2 className="sidedrawer-header">People Online</h2>
            <div className="usersList">
                <ul>
                    {usersList ? usersList.map( user => <li className="usernameListItem" key={user.id}>{user.name}</li>) : null}
                </ul>
            </div>
            <button className="sidedrawer-logoutBtn" onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default SideDrawer;
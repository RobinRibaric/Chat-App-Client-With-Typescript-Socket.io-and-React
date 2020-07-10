import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

import './Dashboard.css';


const Dashboard: React.FC = () => {
    const usersList = useSelector((state: RootState) => state.UsersReducer.users);

    return(
        <div className="dashboard">
            <h2 className="dashboardHeader">People Online</h2>
            <div className="usersList">
                <ul>
                    {usersList ? usersList.map( user => <li className="usernameListItem" key={user.id}>{user.name}</li>) : null}
                </ul>
            </div>
        </div>
    )
}

export default Dashboard;
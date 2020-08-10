import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';


import './Dashboard.css';



const Dashboard: React.FC = () => {
    const usersList = useSelector((state: RootState) => state.UsersReducer.users);
    

    
    
    return(
        <div className="dashboard">
            <h2 className="dashboard-Header">People Online</h2>
            <div className="users-List">
                <ul>
                    {usersList ? usersList.map( user => <li className="username-List-Item " key={user.id}><div className="user-name-container"><p>{user.name}</p></div></li>) : null}
                </ul>
            </div>
        </div>
    )
}

export default Dashboard;
import React from 'react';

import './Logout.css';

interface Props {
    logout: () => void;
}

const LogoutBar: React.FC<Props> = ({logout}) => (
    <div className="Info">
        <div className="leftInnerContainer">
            <h3>ChatBox</h3>
        </div>
        <div className="rightInnerContainer">
            <button className="logout-btn" onClick={() => logout()}>Logout</button>
        </div>

    </div>
);

export default LogoutBar;
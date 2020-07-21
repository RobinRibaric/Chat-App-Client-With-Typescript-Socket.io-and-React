import React from 'react';

import './LogoutButton.css';

interface Props {
    logout: () => void;
}

const LogoutButton: React.FC<Props> = ({logout}) => (
    <button className="logout-btn" onClick={() => logout()}>Logout</button>
)
    
export default LogoutButton;
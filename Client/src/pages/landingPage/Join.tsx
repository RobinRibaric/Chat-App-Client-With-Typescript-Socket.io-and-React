import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


import './Join.css';
import { RootState } from '../../store';

const Join: React.FC = () => {
    const [name, setName] = useState("");
    const error = useSelector((state: RootState) => state.ErrorReducer.error);

    

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Welcome to ChatBox</h1>
                <h1 >Pick a nickname</h1>
                <h3 className="errorInfo">{error}</h3>
                <div><input placeholder="Nickname" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <Link onClick={event => (!name) ? event.preventDefault() : null} to={`/chat?name=${name}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>

        </div>
    )
}


export default Join;
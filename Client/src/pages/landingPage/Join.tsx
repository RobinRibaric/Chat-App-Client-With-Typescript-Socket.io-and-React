import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorAction } from '../../store/Actions/setErrorAction';

import './Join.css';
import { RootState } from '../../store';

const Join: React.FC = () => {
    const [name, setName] = useState<string>("");
    const error = useSelector((state: RootState) => state.ErrorReducer.error);
    const dispatch = useDispatch();

    const checkName = (e: React.MouseEvent) => {
        e.preventDefault();

        dispatch(setErrorAction('Please enter a nickname.'));
    }

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Welcome to ChatBox</h1>
                <h1 >Pick a nickname</h1>
                <h3 className="errorInfo">{error}</h3>
                <div><input placeholder="Nickname" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <Link onClick={event => (!name) ? checkName(event) : null} to={`/chat?name=${name}`}>
                    <button className="loginButton mt-20" type="submit">Sign In</button>
                </Link>
            </div>

        </div>
    )
}


export default Join;
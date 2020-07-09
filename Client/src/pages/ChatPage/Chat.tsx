import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';

import { setErrorAction } from '../../store/Actions/setErrorAction';
import { setUsersAction } from '../../store/Actions/setUsersAction'
import { RootState } from '../../store';

import Messages from './components/Messages/Messages';
import TextInput from './components/TextInput/TextInput';
import Logout from './components/Logout/Logout';
import Dashboard from './components/Users/Dashboard';

import './Chat.css';

import { user, messageInterface, userTyping } from '../@interfaces/interfaces';


let socket: any;

interface Props {
    location: any;
}


const Chat: React.FC<Props> = ({ location }) => {
    const [name, setName] = useState<any>(" ");
    const [userTyping, setUserTyping] = useState<userTyping>({name: "", isTyping: false});
    const [messages, setMessages] = useState<messageInterface[]>([]);
    const [message, setMessage] = useState<string>('');
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>(setTimeout(() => {}, 10000));
    const [inactive, setDisconnect] = useState(false);
    const usersList = useSelector((state: RootState) => state.UsersReducer.users);

    const dispatch = useDispatch();
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);

        socket.emit('join', { name }, () => {
        });

        return () => {
            socket.emit('disconnect', { name });
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    
    useEffect(() => {
        socket.on('message', (message: messageInterface) => {
            setMessages(messages => [...messages, message]);
        });
        
        socket.on('connect_error', () => {
            dispatch(setErrorAction('Connection Error'));
            setDisconnect(true);
        });

        socket.on('user joined', ({ users }: {users: user[]}) => {
            dispatch(setErrorAction(''));
            dispatch(setUsersAction([...users]));
        });

        socket.on('username taken', ({ error }: {error: string}) => {
            dispatch(setErrorAction(error));
        });
        
        socket.on('inactivity', ({error}: {error: string}) => {
            dispatch(setErrorAction(error));
            setDisconnect(true);
        });
        
        socket.on('user typing', ({ name }: { name: string}) => {
            setUserTyping({name, isTyping: true});
        });

        socket.on('user stopped typing', () => {
            setUserTyping({name: "", isTyping: false});
        });

        socket.on('user disconnecting', ({ user }: {user: user}) => {
                let list = usersList.filter( client => client.name !== user.name);
                dispatch(setUsersAction([...list]));
            
        });

        socket.on('disconnect', ({name}: {name: string}) => {
            setDisconnect(true);
        });
        
    }, [usersList]);
    
    
    const sendMessage = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (message) {
            socket.emit('sentMessage', message)
            setMessage('');
        }
    };

    const logout = () => {
        socket.emit('logged out', {message: 'logged out', name});
        setDisconnect(true);
    }

    const typing = (message: string) => {
        socket.emit('typing', { name });

        setMessage(message);

        clearInterval(timer);

        let timeout = setTimeout(() => {
            socket.emit('stopped typing', { name });
        }, 2000);

        setTimer(timeout);
        
    }

    return (
        <div className="outerContainer">
            <Dashboard />
            <div className="chatContainer">
                {inactive ? <Redirect to='/' /> : null}
                <Logout logout={logout}/>
                <Messages messages={messages} name={name} userTyping={userTyping}/>
                <TextInput message={message} typing={typing} sendMessage={sendMessage} />
            </div>
        </div>

    )
}


export default Chat;
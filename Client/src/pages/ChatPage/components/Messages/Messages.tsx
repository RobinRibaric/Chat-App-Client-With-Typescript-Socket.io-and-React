import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';
import { messageInterface, userTyping } from '../../../@interfaces/interfaces';

import './Messages.css';

interface Props {
    messages: messageInterface[];
    name: any;
    userTyping: userTyping;
}


const Messages: React.FC<Props> = ({ messages, name, userTyping}) => (
    <ScrollToBottom className="messages">
        {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        {userTyping.isTyping ? <p className="isTyping colorDark">{`${userTyping.name} is typing...`}</p> : null}
    </ScrollToBottom>
);

export default Messages;

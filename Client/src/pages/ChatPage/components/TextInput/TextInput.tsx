import React from 'react';

import './TextInput.css';

interface Props {
    typing: (message: string) => void;
    sendMessage: (event: any) => void;
    message: any;
}

const Input: React.FC<Props> = ({ typing, sendMessage, message }) => (
    <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => typing(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="send-Button" onClick={event => {
            sendMessage(event)
            typing("");
            }}>Send</button>
    </form>
)

export default Input;
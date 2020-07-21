import React from 'react';

import ReactEmoji from 'react-emoji';

import './Message.css';



interface Props {
    message: {
        text: string;
        user: string;
    },
    name: string;
}

const Message: React.FC<Props> = ({ message: { text, user }, name }) => {
    let isSentByCurrentUser = false;
    
    
    const trimmedName = name.trim().toLowerCase();
    const trimmedUserName = user.trim().toLowerCase();

    if (trimmedUserName === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="message-Container justify-End">
                    <p className="sent-Text pr-10">{trimmedName}</p>
                    <div className="message-Box background-Blue">
                        <p className="message-Text color-White">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="message-Container justify-Start">
                    <div className="message-Box background-Light">
                        <p className="message-Text color-Dark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sent-Text">{user}</p>
                </div>
            )
    );
}

export default Message;
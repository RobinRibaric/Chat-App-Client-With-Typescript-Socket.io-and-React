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
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedName}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sentText">{user}</p>
                </div>
            )
    );
}

export default Message;
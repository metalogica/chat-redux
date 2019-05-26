import React from 'react';

const Message = ({key, message}) => {
  return (
    <div className="message">
      <div className="message-author">From: {message.author}</div>
      <div className="message-time">Sent at: {message.time}</div>
      <div className="message-body">{message.body}</div>
    </div>
  )
}

export default Message;

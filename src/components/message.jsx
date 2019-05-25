import React from 'react';

const Message = ({key, message}) => {
  return (
    <div className="message">
      <div className="message-author">{message.author}</div>
      <div className="message-time">{message.body}</div>
      <div className="message-body">{message.time}</div>
    </div>
  )
}

export default Message;

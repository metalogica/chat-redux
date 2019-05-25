import React, { Component } from 'react';
import Message from '../components/message.jsx';

const messageList = [
  {
    author: 'Tom',
    body: 'Im an example message.',
    time: '23:59:16',
    channel: 'libra'
  },
  {
    author: 'Dick',
    body: 'Im an example message too.',
    time: '23:59:55',
    channel: 'libra'
  },
];

class MessageList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="message-list">
        {messageList.map( (message, index) => { return <Message key={index} message={message}/> })}
      </div>
    )
  }
}

export default MessageList;


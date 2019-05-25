import React, { Component } from 'react';
import Message from '../components/message.jsx';
import messageList from '../data/messageList.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators (
    { messageList: messageList },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    messageList: state.messageList
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(MessageList);

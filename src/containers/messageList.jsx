import React, { Component } from 'react';
import Message from '../components/message.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MessageList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="message-list">
        {this.props.messageList.map( (message, index) => { return <Message key={index} message={message}/> })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messageList: state.messageList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {  },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

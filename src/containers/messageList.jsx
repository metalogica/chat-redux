import React, { Component } from 'react';
import Message from '../components/message.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { fetchMessages } from '../actions/actions_index.js';

class MessageList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // fetch('https://wagon-chat.herokuapp.com/general/messages')
    //     .then(response => response.json(),
    //       error => console.log('An error occured receiving messages', error))
    //     .then((data) => {
    //       this.props.fetchMessages(data.messages);
    //     });
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
    { fetchMessages: fetchMessages },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

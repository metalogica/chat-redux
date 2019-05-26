import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import { addMessage } from '../actions/actions_index.js';

class MessageForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // alert('A name was submitted: ' + this.state.userInput)
    let time = new Date();
    time = time.toString();
    const author = this.props.currentUser || 'richard';
    const body = this.state.userInput;
    // debugger
    // console.log(this.props.addMessage(body, author, time))
    this.props.addMessage(body, author, time)
    const messages = fetch('https://wagon-chat.herokuapp.com/general/messages')
      .then(response => response.json())
      .then((data) => {
        console.log(data.messages);
      });
    console.log(messages)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="message-form">
        <input type="text" placeholder="Type your message!" onChange={this.handleChange} value={this.state.userInput}/>
        <input type="submit" value="Send!"/>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addMessage: addMessage },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

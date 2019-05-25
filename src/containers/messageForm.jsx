import React, { Component } from 'react';

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
    alert('A name was submitted: ' + this.state.userInput)
  }

  render() {
    return (
      <form handleSubmit={this.handleSubmit} className="message-form">
        <input type="text" placeholder="Type your message!" onChange={this.handleChange} value={this.state.userInput}/>
        <input type="submit" value="Send!"/>
      </form>
    )
  }
}

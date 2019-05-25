import React, { Component } from 'react';

class ChannelList extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    channel1: 'Libra',
    channel2: 'Gemini',
    channel3: 'Aquarius'
  }

  render() {
    return (
      <div className="channel-list">
        <ul>
          {Object.values(this.props).map( (channel,index) => { return <li key={index}>{channel}</li> })}
        </ul>
      </div>
    )
  }
}

export default ChannelList;

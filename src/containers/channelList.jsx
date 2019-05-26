import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeChannel } from '../actions/actions_index.js';

class ChannelList extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    channel1: 'Libra',
    channel2: 'Gemini',
    channel3: 'Aquarius'
  }

  handleClick = (event) => {
    const channel = event.currentTarget.innerText.toLowerCase()
    this.props.changeChannel(channel)
  }

  render() {
    return (
      <div className="channel-list">
        <ul>
          {Object.values(this.props.channelList).map( (channel,index) => {
            let icon = this.props.channelIcons.get(channel.toLowerCase())
            return <li key={index} onClick={this.handleClick}><span id={channel}>{icon}</span>{channel}</li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    channelList: state.channelList,
    channelIcons: state.channelIcons
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeChannel: changeChannel },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

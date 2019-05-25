import React from 'react';
import ChannelList from '../containers/channelList.jsx';
import MessageForm from '../containers/messageForm.jsx';
import MessageList from '../containers/messageList.jsx';

const App = () => {
  return (
    <div className="app">
      <ChannelList/>
      <MessageList/>
      <MessageForm/>
    </div>
  );
};

export default App;

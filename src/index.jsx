// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/application.scss';

// initial state
// const currentUser = window.prompt('Please Enter your username:');
const currentUser = 'richard'
const channelList = ['Libra', 'Aquarius', 'Gemini'];
const selectedChannel = channelList[0].toLowerCase()
import messageList from './data/messageList.js'
const initialState = {
  messageList: messageList,
  channelList: channelList,
  selectedChannel: selectedChannel,
  currentUser: currentUser
}

// State and reducers
import messageListReducer from './reducers/message_list_reducer.js';
import channelListReducer from './reducers/channel_list_reducer.js';
import selectedChannelReducer from './reducers/selected_channel_reducer.js';
import currentUserReducer from './reducers/current_user_reducer.js';
const reducers = combineReducers({
  messageList: messageListReducer,
  channelList: channelListReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

// Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(logger, reduxPromise))

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middleware)}>
    <App />
  </Provider>,
  document.getElementById('root')
);



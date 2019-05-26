// Action Types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export function addMessage(body, author, time, channel) {
  return {
    type: ADD_MESSAGE,
    payload: { body, author, time, channel }
  }
}

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export function fetchMessages(messageList) {
  return {
    type: FETCH_MESSAGES,
    payload: messageList
  }
}

export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';
export function changeChannel(channel) {
  return {
    type: CHANGE_CHANNEL,
    payload: channel
  }
}

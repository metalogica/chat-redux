// Action Types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export function addMessage(body, author, time) {
  return {
    type: ADD_MESSAGE,
    payload: { body, author, time }
  }
}

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export function fetchMessages(messageList) {
  return {
    type: FETCH_MESSAGES,
    payload: messageList
  }
}

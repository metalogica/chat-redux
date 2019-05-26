// import messageList from '../data/messageList.js';

// Action Types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export function addMessage(body, author, time) {
  return {
    type: ADD_MESSAGE,
    payload: { body, author, time }
  }
}

export const RENDER_LIST = 'RENDER_LIST';
export function renderList() {
  return {
    type: RENDER_LIST,
    payload: null
  }
}

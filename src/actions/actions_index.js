// Action Types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export function addMessage(body, author, time) {
  return {
    type: ADD_MESSAGE,
    payload: { body, author, time }
  }
}

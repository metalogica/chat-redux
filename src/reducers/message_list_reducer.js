import { ADD_MESSAGE } from '../actions/actions_index.js';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload]
    default:
      return state;
  }
}

// insert new message into list
const addMessageToList = () => {
  return null
}

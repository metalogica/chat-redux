import { ADD_MESSAGE } from '../actions/actions_index.js';
import { RENDER_LIST } from '../actions/actions_index.js';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload]
    case RENDER_LIST:
      return state
    default:
      return state;
  }
}

// insert new message into list
const addMessageToList = () => {
  return null
}

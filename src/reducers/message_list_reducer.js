import { ADD_MESSAGE } from '../actions/actions_index.js';
import { FETCH_MESSAGES } from '../actions/actions_index.js';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload]
    case FETCH_MESSAGES:
      return action.payload
    default:
      return state;
  }
}

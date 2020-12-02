import { PICK_FILTER } from '../actionTypes';

const initailState = {
  filter: 'All'
};

export default function filterReducer(state = initailState, action) {
  if (action.type === PICK_FILTER) {
    return {
      ...state,
      filter: action.payload.filter
    }
  }
  return state;
};
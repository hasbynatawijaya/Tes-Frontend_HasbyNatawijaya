import {ASYNC_ACTION_FINISH, ASYNC_ACTION_START} from '../action/types';

const initialState = {
  asyncAction: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ASYNC_ACTION_START:
      return {...state, asyncAction: true};
    case ASYNC_ACTION_FINISH:
      return {...state, asyncAction: false};
    default:
      return state;
  }
}

import {TRANSACTION_LIST} from '../action/types';

const initialState = {
  transactionList: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TRANSACTION_LIST:
      return {...state, transactionList: action.payload};
    default:
      return state;
  }
}

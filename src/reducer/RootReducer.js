import {combineReducers} from 'redux';
import asyncReducer from '../reducer/AsyncReducer';
import transactionListReducer from '../reducer/TransactionListReducer';

export default combineReducers({
  async: asyncReducer,
  transactionList: transactionListReducer,
});

import axios from 'axios';
import {asyncActionStart, asyncActionFinish} from './AsyncAction';
import {TRANSACTION_LIST} from './types';
import {BASE_URL} from '../../config/config';

export const getTransactionList = () => async dispatch => {
  try {
    let url = `${BASE_URL}/frontend-test`;

    dispatch(asyncActionStart());
    const res = await axios.get(`${url}`);

    //ubah data transaksi ke array
    let transaction = Object.values(res.data);

    dispatch({
      type: TRANSACTION_LIST,
      payload: transaction,
    });
    dispatch(asyncActionFinish());
  } catch (error) {
    dispatch(asyncActionFinish());
  }
};

import thunk from 'redux-thunk';
import rootReducer from '../reducer/RootReducer';
import {createStore, applyMiddleware, compose} from 'redux';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(...middleware)),
);

export default store;

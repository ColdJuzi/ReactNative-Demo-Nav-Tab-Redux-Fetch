import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import PhantomReducer from './Reducer';

var loggerMiddleware = logger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
)(createStore);

export default function configureScene(initialState) {
  return createStoreWithMiddleware(PhantomReducer, initialState);
}

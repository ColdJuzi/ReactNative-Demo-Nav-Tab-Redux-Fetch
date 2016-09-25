import {combineReducers} from 'redux';
import * as TYPES from './ActionType';

function PhantomDeviceBulbInfo(state = [], action) {
  switch (action.type) {
    case TYPES.QUERY_USER_DEVICE_BULB_INFO:
      return action.state;
    break;
    case TYPES.QUERY_USER_DEVICE_BULB_INFO_ERROR:
    default:
    return state;
  }
}

const PhantomReducer = combineReducers({
  PhantomDeviceBulbInfo,
});

export default PhantomReducer;

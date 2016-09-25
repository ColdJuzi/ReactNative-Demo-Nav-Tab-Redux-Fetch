import NetworkOperation from '../Network/NetworkOperation';
let network = new NetworkOperation('https://huantengsmart.com');
import * as TYPES from './ActionType';

function queryUserDeviceWithBulbInfo(bulbLists) {
  return {
    type: TYPES.QUERY_USER_DEVICE_BULB_INFO,
    state: bulbLists,
  }
}

function queryUserDeviceWithBulbInfoError() {
  return {
    type: TYPES.QUERY_USER_DEVICE_BULB_INFO_ERROR,
  }
}

export function queryUserDeviceWithBulbFetch() {
  return dispath => {
    network.networkManager('/api/bulbs', 'GET', null, function(result) {
      if (result.success == true) {
        dispath(queryUserDeviceWithBulbInfo(result.response));
      } else {
        dispath(queryUserDeviceWithBulbInfoError());
      }
    })
  }
}

'use strict';
import React from 'react';

class NetworkOperation {
  constructor(header) {
    this.header = header;
  }

  //  fetch failed repeat request.
  setRequestInfo(url, method, params, response) {
    let requestInfo = {
      url: url,
      method: method,
      params: params,
    };
    this.requestInfo = requestInfo;
  }

  getRequestInfo() {
    return this.requestInfo;
  }

  networkManager(url, method, params, response) {
    this.setRequestInfo(url, method, params);

    this.request(url, method, params, function(result) {
      if (result.success == true) {
        //  fetch success.
        response(result);
      } else {
        // fetcch failed.
        response(result);
      }
    });
  }

  request(url, method, params, callback) {
    let _this = this;
    let requestUrl = this.header + url;
    let requestHeader = method == 'GET' ?
    {'Accept': 'application/json', 'If-None-Match': '',  'Authorization': 'token XXXX',} :
    {'Accept': 'application/json', 'Content-Type': 'application/json',  'Authorization': 'token XXXX',};
    let requestBody = params ? JSON.stringify(params) : null;

    fetch(requestUrl, {
      method: method,
      headers: requestHeader,
      body: requestBody,
    })
    .then(res => {
      if (res.status == 200) {
        return res.text();
      }
    })
    .then(resData => {
      let resJsonData = JSON.parse(resData);
      callback({success: true, response: resJsonData, message: 'Request success with URL ' + requestHeader});
    })
    .catch(error => {
      callback({success: false, message: 'Request failed with URL ' + requestHeader});
    });
  }
}

module.exports = NetworkOperation;

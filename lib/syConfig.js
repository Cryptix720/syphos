"use strict";

const util = require('util');
const SyConfigTemplate = require('./syTemplate');

class SyConfig extends SyConfigTemplate {

  /*1*/
  _comprehension(data) {
    return JSON.parse(data);
  };
  /*2*/
  _extensionality(data) {
    return JSON.stringify(data, null, '  ');
  }
  /*3*/
  _access(data){
	  return JSON.parse(data);
  }
    
  
}

module.exports = SyConfig;
"use strict";

/*Import any fileType*/

const ini = require('ini');



module.exports.json = {
  _comprehension: data => JSON.parse(data),
  _extensionality: data => JSON.stringify(data, null, '  ')
};

module.exports.ini = {
  _comprehension: data => ini.parse(data),
  _extensionality: data => ini.stringify(data)
};

module.exports = {
  _comprehension: data => conf.parse(data),
  _extensionality: data => conf.stringify(data)
};

module.exports {
  _comprehension: data =>  md.parse(data),
  _extensionality: data => md.stringify(data)
};

"use strict";

const SyConfig = require('./lib/syConfig');

const syConfig = new SyConfig();



/*Reads from syphosConf*/
syConfig.read('bin/syphosConf.json');



/*Edit automate and modify your .json file*/
syConfig.set('Syphos', 'Templating');
/*Edit automate and modify your .ini file*/




//Saves SyEdited.json file in lib
syConfig.save('conf/syEdited.json');

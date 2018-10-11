/*Experiment*/
class syEngine {
	
	

function queue(array, data) {
this.comp = (typeof data === 'function') ? data : less;

if (array != null && array instanceof Array) {
this.length = array.length;
this.arr = [0].concat(array);
for (var i = Math.floor(this.length / 2) ; i > 0; i--) {
this.proclateDown(i);
}
}

else if (array === undefined || array === null) {
this.length = 0;
this.arr = [0];
}
else
throw new Error('invalid arguments');
}

module.exports = syEngine;
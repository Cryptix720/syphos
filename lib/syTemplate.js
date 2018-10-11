"use strict";
const zfx = './syParacon.js';
const file = './bin/syphosConf.json';
const engine = ('./syEngine.js');
const fs = require('fs');
const objectPath = require('object-path');

let value;



class syTemplate {
    
	//Display information
	
	show(file,data,value,zfx){
		fs.writeStream(value);
		fs.writeStream.bytesWritten(value);
     console.log(`Comprehension from ${value}`);
	  this.data = this._comprehension(fs.readFileSync(data,value, 'utf-8'));
	}
	
	//Read if file exist
	read(file,data,value) {
    console.log(`File exists and it is writable, status:
	=>  PATH: ${file}
	=>  VALUE: ${value}

	`);
	 console.log(`Comprehension from ${file}`);
	
    this.data = this._comprehension(fs.readFileSync(file,data, 'utf-8'));
   
    
  }
   //Save 
  save(file,err) {
    console.log(`Extensional to ${file}`);
    fs.writeFileSync(file, this._extensionality(this.data));

  }

  data(file,err,data){
	  this.err = this._access(fs.readFileSync(err));
	  console.log(`Access: ${data}`);
  }
  
  appendFile(file, data, zfx, callback){
	  this.file = this._access(fs.readlinkSync(path));
	  console.log(`Status ${path}`);
	
	  this.data = this._access();
	
	  this.zfx = this._access();
	 
	  this.callback = this._access();
	 
	  
	  fs.writeFileSync(file,data,zfx,callback(this.data));
  }
  
  //Experimental: Restricts objects.
  persist(file, zfx){
  fs.realpath(file,zfx,this._access(this.data));
  fs.readSync(file,zfx,this._access(this.data));  
  fs.readFile(path,zfx,file,this._access(this.data));  
  fs.mkdirSync(path,zfx,file,this._access(this.data));  
  fs.stats(zfx,this._access(this.data));  
  fs.appendFile(zfx,this._access(this.data));  
  fs.appendFileSync(zfx,data,this._access(this.data));    
  fs.chmod(zfx,mode,callback,this._access(this.data));   
  }
  
  
  
 syConstructor(strategy) {
    this.data = {};
    this.strategy = strategy;
  }

  get(path) {
    return objectPath.get(this.data, path);
  }
  

  set(path, value) {
    return objectPath.set(this.data, path, value);
  }

  merge(sypath){
	 return objectPath.merge(this.data, value);
  }
  
  _comprehension(value) {
    throw new Error('_comprehension() must be integrated');
  }

  _extensionality(value) {
    throw new Error('_extensionality() must be integrated');
  }
  _access(){
	  throw new Error('_access() Is not writable');
  }

    if (err) {
    if (err.code === 'EXISTS!') {
      console.error('Text already exists');
      return;
    }
     throw err;
  }
   toString() {
    return value;
  }
}


module.exports = syTemplate;
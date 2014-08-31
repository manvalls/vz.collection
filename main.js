var Property = require('vz.property'),
    
    functionsList = new Property(),
    argumentsList = new Property(),
    thisArgList = new Property();


function Collection(){
	functionsList.of(this).set([]);
  argumentsList.of(this).set([]);
  thisArgList.of(this).set([]);
}

module.exports = Collection;

function resolve(){
	var f,res = [],
      fs = functionsList.of(this).get(),
      args = argumentsList.of(this).get(),
      thisArgs = thisArgList.of(this).get();
  
	while(f = fs.shift()) res.push(f.apply(thisArgs.shift(),args.shift()));
  
	return res;
}

Object.defineProperties(Collection.prototype,{
  add: {value: function(f,args,thisArg){
    functionsList.of(this).get().push(f);
    argumentsList.of(this).get().push(args);
    thisArgList.of(this).get().push(thisArg);
    return this;
  }},
  resolve: {value: resolve},
  apply: {value: resolve},
  call: {value: resolve}
});


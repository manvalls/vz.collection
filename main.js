
function Collection(){
	
	Object.defineProperties(this,{
		_fs: {
			value: []
		},
		_args: {
			value: []
		},
		_thats: {
			value: []
		}
	});
	
}

module.exports = Collection;

Collection.prototype.add = function(f,args,that){
	this._fs.push(f);
	this._args.push(args);
	this._thats.push(that);
	return this;
};

Collection.prototype.resolve = function(){
	var f,res = [];
	while(f = this._fs.shift()) res.push(f.apply(this._thats.shift(),this._args.shift()));
	return res;
};

Collection.prototype.apply = Collection.prototype.resolve;


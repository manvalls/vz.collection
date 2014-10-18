[![NPM](https://nodei.co/npm/vz.collection.png?downloads=true)](https://nodei.co/npm/vz.collection/)

This package uses or may use at some point in the future ECMAScript 6 features. Use it on a compatible environment or transpile it with Traceur, Closure Compiler, es6-transpiler or equivalent. Please note that some of these have flaws and bugs, test your code carefully until you find a suitable tool for your task.

When cloning this repository, put the folder inside another named "node_modules" in order to avoid potential errors related to npm's dependency handling, and then run `npm install` on it.

No piece of software is ever completed, feel free to contribute and be humble.

# vz Collection

## Sample usage:

```javascript

var Collection = require('vz.collection'),
    collection = new Collection(),
    result;

// Lets add some function calls to the collection

// (function,arguments,thisArg)
collection.add(navigator.vibrate,[100],navigator);
collection.add(console.log,['Hello','world'],console);

// At this point neither navigator.vibrate nor console.log
// where executed

result = collection.resolve(); // With this call we execute both

console.log(result);  // An array with returned values

// Now the collection is empty again

```

## Reference

### Collection object

#### Constructor()

Creates and initializes a new collection

#### Collection.add(function,arguments,thisArg)

Adds to the collection the given function, with given arguments and thisArg

#### Collection.resolve()
#### Collection.apply()
#### Collection.call()

Executes functions of the collection in the order they were added, and empties it. Returns an array with the values returned by each of the functions of the collection.



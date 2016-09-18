#Constructor Pattern

* In Javascript, our focus for this pattern is object constructors. These are used to prepare the object for use and accepting arguments that a constructor can use to initialize the values of properties and methods at object creation.

##Object Creation

- There are three fundamental ways to create new objects in Javascript.

```js
var newObject = {};

var newObject = Object.create(Object.prototype);

var newObject = new Object();
```

- There are four basic ways to assign keys and values to an object:

```js
1. Dot syntax

// Set properties
newObject.someKey = "Hello World";
// Get properties
var value = newObject.someKey;

2. Square bracket 

// Set properties
newObject['someKey'] = "Hello World";
// Get properties
var value = newObject['someKey'];

3. Object.defineProperty

// Set properties
Object.defineProperty( newObject, 'someKey', {
	value: 'for more control of the property\'s behavior',
	writable: true,
	enumerable: true,
	configurable: true
});
// OR
var defineProp = function(obj,key,value) {
	var config = {
		value: value,
		writable: true,
		enumerable: true,
		configurable: true
	};

	Object.defineProperty(obj,key,config);
};

// To use create a new empty "person" object
var person = Object.create(Object.prototype);

// Populate the object
defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', false);

console.log(person);

4. Object.defineProperties

Object.defineProperties(newObject, {
	'someKey': {
		value: 'Hello World',
		writable: true
	},

	'anotherKey': {
		value: 'Foo bar',
		writable: false
	}
});

// To use
var driver = Object.create(person);
// Set
defineProp(driver, 'topSpeed','100mph');
// Gets
console.log(driver.dateOfBirth);
console.log(driver.topSpeed);









```

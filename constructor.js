const defineProp = function (obj, key, val) {
  const config = {
    value: val,
    writable: true,
    enumerable: true,
    configurable: true
  };

  Object.defineProperty(obj, key, config);
};

const person = Object.create(Object.prototype);

defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', false);

console.log(person);

// In Js there are two types of references
// 1- Strong (Map, Set)
// 2- Weak (WeakMap, WeakSet)

// let WeakMap = new WeakMap();
// let obj = {};
// WeakMap.Set(obj, 'ok');

// In js, the WeakMap is used to store value in a key value pair but it is 
// different as the entries are weakly referred to.

// WeakMap does not support iteration and methods keys(), values(), entries()


// Map vs WeakMap

// Map - 
// 1 - A map is an unordered list of key-value pairs where the key and value can be of any type like string, Boolean, number etc.
// 2 - Maps are iterable.
// 3 - The garbage collector will not remove the key-value pairs from the map even if the key is no longer used in the code.

// WeakMap - 
// 1 - In a WeakMap 3is a collection of key-value pairs where the key must be an object or function and the value can be of any type.
// 2 - WeakMaps are not iterable.
// 3 - The garbage collector will remove the key-value pairs from the WeakMap if the key is no longer used in the code.

// let map = new WeakMap()

// let user1 = {name: 'John'}
// let user2 = {name: 'Doe'}

// map.set(user1, 'Added data for user1')
// map.set(user2, 'Added data for user2')

// console.log(map.get(user1)) // Added data for user1

// user1 = null

// console.log(map.get(user1)) // undefined


// // https://medium.com/geekculture/understanding-javascript-maps-and-sets-ca31a9bf40da







//  When to Use What?
// ✅ Use Map when:

// You need non-string keys (e.g., objects, functions).
// You need guaranteed key order.
// You frequently add or remove key-value pairs.
// Performance is critical.
// Doesn't inherit from Object.prototype, so no risk of prototype pollution


// ✅ Use Object when:

// You need a simple key-value store with string keys.
// You want to serialize the data easily.
// The object structure is fixed and doesn't change often.
// Inherits from Object.prototype, which can lead to accidental key conflicts


// Map example

// const myMap = new Map();
// myMap.set('name', 'Alice');
// myMap.set(1, 'One');
// myMap.set({ key: 'value' }, 'Object Key');

// console.log(myMap.get(1)); // "One"
// console.log(myMap.size); // 3
// console.log([...myMap.keys()]); // ['name', 1, { key: 'value' }]

// object example
// const myObj = { name: 'Alice' };
// myObj[1] = 'One'; // Key is automatically converted to a string

// console.log(myObj[1]); // "One"
// console.log(Object.keys(myObj)); // ["name", "1"]





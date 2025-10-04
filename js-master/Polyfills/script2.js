// forEach
// map
// filter
// find
// findIndex
// reduce
// call bind apply
// DeepCopy
// groupBy - to do
// promise



// let arr = [3,1,8,4,5]
// Array.prototype.myForEach = function(cb){
//   for(let i=0; i<this.length; i++){
//     cb(this[i], i, this);
//   }
// }

// arr.myForEach((item, i) => {
//   console.log(item * 3);
// })


// 1 - You call:
// arr.myForEach((item, i) => { console.log(item * 3) })

// 👉 cb = (item, i) => console.log(item * 3)

// 2 - Inside myForEach, you loop through arr.

// At i=0 → cb(3, 0, arr)

// At i=1 → cb(1, 1, arr)

// At i=2 → cb(8, 2, arr)
// … and so on.

// 3 - Each time, the callback gets three arguments:

// this[i] → element

// i → index

// this → whole array


// 1 - forEach
{

// Good-------------------------------------------------------------------

Array.prototype.myForEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

// issues 
// 1. Sparse Arrays (i.e., arrays with holes):
// Your code will execute the callback on holes, but the native forEach skips them.

// let arr = [1, , 3]; // index 1 is a hole

// arr.myForEach((val, i) => {
//   console.log(i, val);
// });
// Your output:

// 0 1
// 1 undefined ✅ ❌ (should be skipped)
// 2 3

// Native forEach output:

// 0 1
// 2 3


// 2. Callback is not a function:
// Your polyfill doesn't check the type of the callback. Native forEach throws an error if the callback is not a function.

// 🔍 Example:

// [1, 2].myForEach(null); // or 'hello'
// Your version: Throws no error — or worse, throws something unclear later.

// Native version: Immediately throws

// TypeError: null is not a function

// solution -
// Better--------------------------------------------------------------------------
Array.prototype.myForEach = function(callback) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for (let i = 0; i < this.length; i++) {
        if (i in this) { // skip holes in sparse arrays
            callback.call( this[i], i, this);
        }
    }
};

// In Arrays: What does i in arr check?
// It checks whether the index i actually exists in the array — i.e., it’s not a hole.
let arr = [];
arr[2] = 'hello';

console.log(0 in arr); // false (hole)
console.log(1 in arr); // false (hole)
console.log(2 in arr); // true  (value exists)
console.log(3 in arr); // false (out of bounds)

// --------------------

// Best------------------------------------------------------------------------------------

Array.prototype.myForEach = function(callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for (let i = 0; i < this.length; i++) {
        if (i in this) { // skip holes in sparse arrays
            callback.call(thisArg, this[i], i, this);
        }
    }
};

// thisArg is an optional second parameter in many array methods like forEach, map, filter, etc.
// It allows you to explicitly set the value of this inside the callback function.

// Sometimes you want to refer to an object inside your callback, and you don’t want to use closures 
// or arrow functions. Instead, you can pass thisArg.

const logger = {
    prefix: 'Value:',
    log(val) {
      console.log(this.prefix, val);
    }
  };
  
  [1, 2, 3].forEach(logger.log); // ❌ 'this' is undefined or window

// undefined 1
// undefined 2
// undefined 3
// -------------------------

// [1, 2, 3].forEach(function(val) {
//     console.log(this.prefix, val);
//   }, logger); // passing logger as thisArg

// Value: 1
// Value: 2
// Value: 3

}
// --------------------------------------------------------------------------------------------------
// Map
{
Array.prototype.myMap = function(callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) { // skips holes
            result[i] = callback.call(thisArg, this[i], i, this);    // func.call(this, arg1, arg2, arg3, ...);
        }
    }
    return result;
};

// uses
let numbers = [1, 2, 3, 4];
// Using your polyfill
let doubled = numbers.myMap(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]
// With arrow function
let squared = numbers.myMap((num, index) => {
  return num * num + index; // also gets index
});
console.log(squared); // [1, 5, 11, 19]
// Using thisArg
let multiplier = {
  factor: 3
};
let multiplied = numbers.myMap(function(num) {
  return num * this.factor;  // 'this' is bound to multiplier
}, multiplier);  // multiplier - thisArgs
console.log(multiplied); // [3, 6, 9, 12]
// -------------

// Example with arrow functions 🚨
// let nums = [1, 2, 3];
// let multiplier = { factor: 5 };

// let multiplied = nums.myMap((num) => {
//   return num * this.factor;
// }, multiplier);

// console.log(multiplied); // [NaN, NaN, NaN]

// Why?
// Because arrow functions don’t have their own this — they use the this from the outer scope, so thisArg has no effect here.

// That’s why thisArg only makes sense with regular functions.

// ✅ In summary:

// thisArg lets you control what this means inside the callback.

// If you don’t pass it, this will be undefined (strict mode) or window/global (non-strict).

// With arrow functions, thisArg is ignored.

// ---------------------------



Array.prototype.myMap = function(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  let result = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    if (i in this) { // skip holes in sparse arrays
      // callback gets: element, index, array
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

// Usage examples:
let numbers2 = [1, 2, 3, 4];
let doubled2 = numbers2.myMap(function(element, index, array) {
  console.log("this ->", this);        // shows thisArg if passed
  console.log("element ->", element);  // current value
  console.log("index ->", index);      // index
  console.log("array ->", array);      // original array
  console.log("----------");
  return element * 2;
}, { name: "CustomThis" }); // <-- thisArg

console.log("Final result:", doubled2);
}
// --------------------------------------------------
// filter
{

    // basic
    // Array.prototype.myFilter = function(cb){
    //     let arr=[];
    //     for(let i=0; i<this.length; i++){
    //         if(cb(this[i]))
    //         arr.push(this[i]);
    //     }
    //     return arr
    // }

Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) { // Skip holes
            if (callback.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
};
}
// -----------------------------------------------------------
// find
{

Array.prototype.myFind = function(callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for (let i = 0; i < this.length; i++) {
        if (i in this) { // skip sparse array holes
            if (callback.call(thisArg, this[i], i, this)) {
                return this[i]; // return the first matching element
            }
        }
    }

    return undefined; // if no match found
};

}
// ----------------------------------------------
// findIndex
{

Array.prototype.myFindIndex = function(callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    for (let i = 0; i < this.length; i++) {
        if (i in this) { // Skip holes
            if (callback.call(thisArg, this[i], i, this)) {
                return i; // Return the index of the first match
            }
        }
    }
    return -1; // If nothing matched
};

}
// ----------------------------------------------
// Reduce
{
// skipping edge cases like:

// sparse arrays (holes),
// no initialValue provided on an empty array,
// or skipping callback validation,

Array.prototype.myReduce = function(callback, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError("Reduce of empty array with no initial value");
    }
    let acc = initialValue;
    let startIndex = 0;
    // If no initialValue, use the first element
    if (acc === undefined) {
        acc = this[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
};
}

// call
// call bind apply  https://www.youtube.com/watch?v=K7Ur441AFy4

// -----------------------------------------------------------------
{
let person1={
    name: "Abhi",
    printAge: function(age){
        console.log(this.name + "is" + age + "years old" )
    }
}
person1.printAge(29);
// but lets suppose we have another object
let person2={
    name: "Ranu",
    printAge: function(age){
        console.log(this.name + "is" + age + "years old" )
    }
}
// again we are duplicating printAge method
// solution? write function outside and borrow'
let person3={
    name: "Abhi",
}
let person4={
    name:"Ranu"
}
function printAge(age){
    console.log(this.name + "is" + age + "years old" )
}
printAge.call(person3, 29);
// -------------------------------------------------------
}

// call

{

Function.prototype.myCall = function(obj, ...args){
    if(typeof this !== "function"){
        throw new Error("not callable");
    }
    obj.fn = this; // Attach the function to the given object
    const result = obj.fn(...args); // Call the function with the provided arguments
    delete obj.fn; // Clean up by deleting the temporary function property
    return result; // Return the result of the function call
}
}

// ---------------------------------------------------

// apply
{
Function.prototype.myApply = function(obj, ...args){
    if(typeof this !== 'function'){
        throw new Error("not callable");
    }
    if(!Array.isArray(...args)){
        throw new error("wrong");
    }
    obj.fn = this; // Attach the function to the given object
    const result = obj.fn(...args); // Call the function with the provided arguments
    delete obj.fn; // Clean up by deleting the temporary function property
    return result; // Return the result of the function call
}
}

// --------------------------------------------
// bind

{
Function.prototype.myBind = function(obj, ...args1){
    if(typeof this !== 'function'){
        throw new Error("not callable");
    }
    obj.fn=this;
    return function(...args2){
    obj.fn(...args1, ...args2)
    }
}

let newFn = printAge.bind(person1);  //band can take argument which will be captured in ...args1
newFn(25)   // newFn can take argument which willl be captured in ...args2

}


// ------------------------------------------------------------------------

// GroupBy


// -------------------------------------------------------------
// Polyfill for Array.prototype.groupBy
// -------------------------------------------------------------
// Syntax: 
//   arr.groupBy(callbackFn)
//
// Example:
//   [6.1, 4.2, 6.3].groupBy(Math.floor)
//   => { '6': [6.1, 6.3], '4': [4.2] }
//
//   ['one', 'two', 'three'].groupBy(str => str.length)
//   => { '3': ['one', 'two'], '5': ['three'] }
//
// Notes:
// - callbackFn is called with (element, index, array)
// - Result is an object where keys are stringified group identifiers
// -------------------------------------------------------------

if (!Array.prototype.myGroupBy) {
  Array.prototype.myGroupBy = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    let result = {};

    for (let i = 0; i < this.length; i++) {
      if (i in this) { // skip sparse array holes
        // Execute callback for current element
        let key = callback.call(thisArg, this[i], i, this);

        // Convert key to string (object keys are strings/symbols only)
        key = String(key);

        // Initialize group if it doesn't exist
        if (!result[key]) {
          result[key] = [];
        }

        // Push element into the correct group
        result[key].push(this[i]);
      }
    }

    return result;
  };
}

// -------------------------------------------------------------
// Usage examples
// -------------------------------------------------------------

let numbers = [6.1, 4.2, 6.3];
console.log(numbers.myGroupBy(Math.floor));
// Output: { '6': [ 6.1, 6.3 ], '4': [ 4.2 ] }

let words = ['one', 'two', 'three', 'four', 'five'];
console.log(words.myGroupBy(word => word.length));
// Output: { '3': [ 'one', 'two' ], '5': [ 'three' 'seven'], '4': [ 'four', 'five' ] }




// -------------------------------------------------------------------------

// https://www.youtube.com/watch?v=FR5TO6sro58

// Promise
{
const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customPromise(executor){
    let state = PENDING
    let value = null;
    let handlers = [];
    let catchers = [];


function resolve(result){
    if(state !== PENDING){
        return;
    }
    state = FULFILLED;
    value=result;
    handlers.forEach(h => h(value))
}

function reject(err){
    if(state !== PENDING){
        return;
    }
    state = REJECTED;
    value = err;

    catchers.forEach((c)=>c(value));
}

this.then = function(sucessCallback){
    if(state===FULFILLED){
        sucessCallback(value)
    } else{
        handlers.push(sucessCallback)
    }
}

this.catch = function(failureCallback){
    if(state===REJECTED){
        failureCallback(value)
    } else{
        catchers.push(failureCallback)
    }
}

executor(resolve, reject)

}

const doWork = (res, rej)=>{
    if(2==2){
        setTimeout(()=>{
            res('resolved a promise')
        }, 1000)
    } else{
        setTimeout(()=>{
            rej('rejected a promise')
        }, 1000)

    }
}

let greetMsg = new customPromise(doWork)
greetMsg.then((val)=>{
    console.log('then...', val)
})

greetMsg.catch((val)=>{
    console.log('catch', val);
})



// ------------------------

// chat gpt

// const PENDING = 0;
// const FULFILLED = 1;
// const REJECTED = 2;

// function customPromise(executor) {
//     let state = PENDING;
//     let value = null;
//     let handlers = [];
//     let catchers = [];

//     function resolve(result) {
//         if (state !== PENDING) return;
//         state = FULFILLED;
//         value = result;
//         handlers.forEach(h => h(value));
//     }

//     function reject(err) {
//         if (state !== PENDING) return;
//         state = REJECTED;
//         value = err;
//         catchers.forEach(c => c(value));
//     }

//     this.then = function (successCallback) {
//         return new customPromise((resolve) => {
//             if (state === FULFILLED) {
//                 resolve(successCallback(value));
//             } else {
//                 handlers.push((val) => resolve(successCallback(val)));
//             }
//         });
//     };

//     this.catch = function (failureCallback) {
//         return new customPromise((resolve) => {
//             if (state === REJECTED) {
//                 resolve(failureCallback(value));
//             } else {
//                 catchers.push((val) => resolve(failureCallback(val)));
//             }
//         });
//     };

//     // Ensure the executor runs safely
//     try {
//         executor(resolve, reject);
//     } catch (err) {
//         reject(err);
//     }
// }

// // Example Usage
// const doWork = (res, rej) => {
//     setTimeout(() => {
//         res("Resolved a promise");
//     }, 1000);
// };

// let greetMsg = new customPromise(doWork);

// greetMsg.then((val) => {
//     console.log("then...", val);
// }).catch((val) => {
//     console.log("catch", val);
// });

}
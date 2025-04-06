
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
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }

    return result;
};


}
// --------------------------------------------------
// filter
{

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
// ----------------------------------------
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
        throw new error("not callable");
    }
    obj.fn = this;
    obj.fn(...args)
}

}

// ---------------------------------------------------

// apply
{
Function.prototype.myApply = function(obj, ...args){
    if(typeof this !== 'function'){
        throw new error("not callable");
    }
    if(!Array.isArray(...args)){
        throw new error("wrong");
    }
    obj.fn=this;
    obj.fn(...args)
}

}

// --------------------------------------------
// bind

{
Function.prototype.myBind = function(obj, ...args1){
    if(typeof this !== 'function'){
        throw new error("not callable");
    }
    obj.fn=this;
    obj.fn(...args1, ...args2)
}

let newFn = printAge.bind(person1);  //band can take argument which will be captured in ...args1
newFn(25)   // newFn can take argument which willl be captured in ...args2

}

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
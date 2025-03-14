// For Each
let arr = [1,2,3,4]
Array.prototype.myForEach = function(cb){
    for(let i=0; i<this.length; i++){
        cb(this[i])
    }
}
// arr.myForEach((item)=>{
//     console.log(item*5);
// })


// ----------------------------------------------------


Array.prototype.myForEach = function(cb, thisArg) {
    for (let i = 0; i < this.length; i++) {
        // Ensure callback receives the correct arguments: element, index, array
        cb.call(thisArg, this[i], i, this);
    }
};

// -----
let arr1 = [1, 2, 3, 4];

arr1.myForEach(function(element, index, array) {
    console.log('Element:', element, 'Index:', index, 'Array:', array);
});

// ------------------------------------------------------------



// map
Array.prototype.myMap = function(cb){
    let ans=[];
    for(let i=0; i<this.length; i++){
ans.push(cb(this[i]));
    }
    return ans;
}

// let out = arr.myMap((item)=>{
//     return item*2
// })
// console.log(out)



// filter
Array.prototype.myFilter = function (cb) {
    let ans = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i]))
        ans.push(this[i]);
    }
    return ans;
}
// let out = arr.myFilter((item)=>{
//     return item>2
// })
// console.log(out)


// Bind

const test = {
    a: '123',
    b: '234',

}
function tester(){
    console.log(this.a, this.b)
}
test._this()

Function.prototype.myBind = function(scope, ...args){
    scope._this = this;
    return function(){
                // why scope._this is working and this() is not
        return scope._this(...args)
    }
}

const bindExecutor = tester.myBind(test)
bindExecutor()



// ---------------------------------
// Promise.all

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];            // Array to store resolved values
        let resolvedCount = 0;       // Counter for resolved promises
        const totalPromises = promises.length;
        // If no promises, resolve immediately with an empty array
        if (totalPromises === 0) {
            resolve([]);
            return;
        }
        // Iterate through each promise
        promises.forEach((promise, index) => {
            // Make sure the item is treated as a promise
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;  // Store the resolved value at the correct index
                    resolvedCount++;         // Increment the resolved count

                    // If all promises have resolved, resolve the entire promise
                    if (resolvedCount === totalPromises) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    // If any promise fails, reject immediately with the error
                    reject(error);
                });
        });
    });
}
// usage
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));
const promise3 = Promise.resolve(42);

myPromiseAll([promise1, promise2, promise3])
    .then((values) => console.log(values))  // Expected output: [3, 'foo', 42]
    .catch((error) => console.error(error));


// -------------------------------------------------------------------------

// promise.any
// Polyfill for AggregateError if not available
function AggregateError(errors, message) {
    this.errors = errors;
    this.message = message || "All promises were rejected";
    this.name = "AggregateError";
}

AggregateError.prototype = Object.create(Error.prototype);
AggregateError.prototype.constructor = AggregateError;

// Polyfill for Promise.any
function myPromiseAny(promises) {
    return new Promise((resolve, reject) => {
        let errors = [];              // Array to store rejection reasons
        let rejectedCount = 0;        // Counter for rejected promises
        const totalPromises = promises.length;

        // If no promises, reject immediately with an empty AggregateError
        if (totalPromises === 0) {
            reject(new AggregateError([], "All promises were rejected"));
            return;
        }

        // Iterate through each promise
        promises.forEach((promise, index) => {
            // Convert each item to a promise (if it's not already)
            Promise.resolve(promise)
                .then((value) => {
                    // Resolve the outer promise as soon as the first one resolves
                    resolve(value);
                })
                .catch((error) => {
                    // Store the error reason
                    errors[index] = error;
                    rejectedCount++;   // Increment the rejected count

                    // If all promises have been rejected, reject with an AggregateError
                    if (rejectedCount === totalPromises) {
                        reject(new AggregateError(errors, "All promises were rejected"));
                    }
                });
        });
    });
}

// Usage Example
const p1 = Promise.reject("Error 1");
const p2 = new Promise((resolve) => setTimeout(resolve, 100, "Success"));
const p3 = Promise.reject("Error 2");

myPromiseAny([p1, p2, p3])
    .then((value) => console.log(value))  // Expected output: "Success"
    .catch((error) => console.error(error));

// Example with all rejected promises
const p4 = Promise.reject("Error 1");
const p5 = Promise.reject("Error 2");

myPromiseAny([p4, p5])
    .then((value) => console.log(value))
    .catch((error) => console.error(error));  // AggregateError: All promises were rejected

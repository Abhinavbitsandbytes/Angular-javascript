// let arr = [3,1,8,4,5]
// Array.prototype.myForEach = function(cb, thisArg){  // we are not passing any thisArg
//   for(let i=0; i<this.length; i++){
//     if(i in this){
//     cb.call(thisArg, this[i], i, this);
//     }
//   }
// }
// arr.myForEach((item, i,)=>{
//   console.log(this)   // window object
//   console.log(item*3);
// },)

// ---------------------------

// let arr = [3,1,8,4,5]
// Array.prototype.myForEach = function(cb, thisArg){  // we are not passing any thisArg
//   for(let i=0; i<this.length; i++){
//     if(i in this){
//     cb.call(thisArg, this[i], i, this);
//     }
//   }
// }
// arr.myForEach(function(item, i,){
//   console.log(this)  // window obj
//   console.log(item*3);
// },)

// --------------------------

// let arr = [3,1,8,4,5]
// Array.prototype.myForEach = function(cb, thisArg){ // we are not passing {a:5} as thisArg
//   for(let i=0; i<this.length; i++){
//     if(i in this){
//     cb.call(thisArg, this[i], i, this);
//     }
//   }
// }
// arr.myForEach((item, i,)=>{
//   console.log(this)  // window obj   // Arrow functions don’t have their own this — they lexically capture this from the surrounding scope.That means the thisArg you pass ({a:5}) is completely ignored when the callback is an arrow function.
//   console.log(item*3);
// }, {a:5})

// ------------------------

// let arr = [3,1,8,4,5]
// Array.prototype.myForEach = function(cb, thisArg){ // we are not passing {a:5} as thisArg
//   for(let i=0; i<this.length; i++){
//     if(i in this){
//     cb.call(thisArg, this[i], i, this);
//     }
//   }
// }
// arr.myForEach(function(item, i,){
//   console.log(this)  // {a:5}
//   console.log(item*3);
// }, {a:5})
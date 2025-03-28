// For Each
let arr = [1,2,3,4]
Array.prototype.myForEach = function(cb){
    for(let i=0; i<this.length; i++){
        cb(this[i], i, this)
    }
}
// arr.myForEach((item, item, arr)=>{
//     console.log(item*5);
// })


// ----------------------------------------------------

// dont read this. read above one
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
ans.push(cb(this[i], i, this));
    }
    return ans;
}

// let out = arr.myMap((item, index, arr)=>{
//     return item*2
// })
// console.log(out)



// filter
Array.prototype.myFilter = function (cb) {
    let ans = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this))
        ans.push(this[i]);
    }
    return ans;
}
// let out = arr.myFilter((item, index, arr)=>{
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
// Polyfill for setTimeout:

if (typeof setTimeout === 'undefined') {
    window.setTimeout = function(callback, delay) {
      var start = Date.now();
  
      function checkTime() {
        if (Date.now() - start >= delay) {
          callback();
        } else {
          // Continue checking the time until the delay is reached
          setInterval(checkTime, 0);
        }
      }
  
      checkTime(); // Run the first time immediately
    };
  }
  
//   ---------------------------------------------
// Polyfill for setInterval:
if (typeof setInterval === 'undefined') {
    window.setInterval = function(callback, interval) {
      function loop() {
        callback();
        setTimeout(loop, interval); // Recurse by calling setTimeout after the specified interval
      }
      setTimeout(loop, interval); // Start the loop
    };
  }

//-------------------------------------------------
// call bind apply  https://www.youtube.com/watch?v=K7Ur441AFy4
// reduce - https://www.youtube.com/watch?v=JLoK1ZBcC4o

















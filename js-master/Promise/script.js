
let posts = ['post1', 'post2'];

function createPost(post) {
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        posts.push(post);
        resolve(posts)
    }, 1000);
})
}

function getPost() {
    setTimeout(() => {
        console.log(posts);
    }, 500);
}

createPost('post3').then((data)=>{
    getPost()
});



// --------------------------------------
// polyfil

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




// https://www.youtube.com/watch?v=FR5TO6sro58



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


// ------------------------------------

// MindBlowing difference between promise and async await

function  myPromise(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("hello");
        }, 2000)
    })
}



for(let i=0; i<5; i++){
    myPromise().then((res)=>{
        console.log(res)
    })
}

// output - hellow will be printed 5 (5 hellow) times after 2 minutes.

// ---async await----

function  myPromise(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("hello");
        }, 2000)
    })
}

async function run() {
    for(let i=0; i<5; i++){
        const res = await myPromise();
        console.log(res);
      }
}
run()
// ------------------------------------------------------------

// second concept
function temp(){
    return "hello"
}

temp().then((res)=>{
    console.log(res)
})

// error - script.js:44 Uncaught TypeError: temp(...).then is not a function

async function temp(){
    return "hello"
}

temp().then((res)=>{
    console.log(res)
})

//output - hello


// --------------------------------------------------------------------















// output - for 2 second nothing will be printed, then hellow, then again nothing for 2 second, then one more hellow....5 times
// it means that i in for loop will not wait in promise but will wait in async await.

// -----------------------------------------------------------------------------------



// I have an array of 10 string-based IDs like this:
// const ids = ["1", "2", "3", ..., "10"];

// I want to call an asynchronous function fetchById(id) for each ID, and I want to implement three different strategies for how the calls are made:

// Parallel Execution: Call fetchById(id) for all IDs at once and wait for all responses.

// Sequential Execution: Call fetchById(id) one after another, starting the next only after the previous one finishes.

// Batch Execution: Call fetchById(id) in batches (e.g., 3 at a time). Wait for one batch to complete before starting the next.

// Please write clean, modular, and easy-to-understand functions for each strategy.



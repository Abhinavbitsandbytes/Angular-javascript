
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




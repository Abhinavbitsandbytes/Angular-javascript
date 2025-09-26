const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];


// function fetchById2(id) {
//   // Example: calling JSONPlaceholder API
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => {
//       if (!response.ok) {
//         console.log('ii')
//         throw new Error(`Failed to fetch ID: ${id}`);
//       }
//       console.log('jj')
//       return response.json();
//     });
// }
function fetchById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched for ID: ${id}`);
      resolve(`Response for ID: ${id}`);
    }, Math.random() * 1000); // Simulate network latency
  });
}

async function fetchAllByIds(ids) {
  const promises = ids.map(id => fetchById(id)); // this will be returned immediately and no dependent on settimeout value.
  console.log('p', promises)  // fist p will be consoled then 'ii'/'jj' after allSettled function
  const results = await Promise.allSettled(promises);
  console.log('res', results)

  const finalResponses = results.map((result, index) => {
    if (result.status === "fulfilled") {
      return result.value; // keep the response
    } else {
      console.warn(`Failed for ID ${ids[index]}:`, result.reason);
      return null; // return null to mark failure
    }
  });

  return finalResponses;
}

// Run it
fetchAllByIds(ids).then(responses => {
  console.log("All responses:", responses);
});


// what will be the order of output? is it same for all items or dependent on timeout time

// The console.log inside setTimeout

// This log (Fetched for ID: ...) will appear in the order that each async operation finishes,

// i.e., dependent on the random timeout.

// So it will not always be in the same order as the IDs in the array.

// Example run might print:

// Fetched for ID: 3
// Fetched for ID: 7
// Fetched for ID: 1

// 🔹 The finalResponses (from Promise.allSettled)

// Even though logs come in random order,

// Promise.allSettled preserves the original order of the array.

// So finalResponses will always align with ids → [Response for ID: 1, Response for ID: 2, ...] (with null where failed).

// ----------------------------------------------------

// How async works

// When you mark a function as async:

// async function fetchAllByIds(ids) { ... }


// That function always returns a Promise, no matter what you return inside it.

// If you return someValue;, JS automatically wraps it in Promise.resolve(someValue).

// If you throw error;, JS automatically wraps it in Promise.reject(error).

// return finalResponses;
// looks like it’s returning just an array.
// But because fetchAllByIds is async, it actually returns a Promise that resolves to that array:





// -------------------------------------------------------

// in case of reject, js engine response
// {status : "rejected", reason: "response for id 1"}

// in case of resolve, js engine response
// {status: 'fulfilled', value: 'response for id 1'}







// -----------------------------------

const ids2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function fetchById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched for ID: ${id}`);
      resolve(`Response for ID: ${id}`);
    }, Math.random() * 1000); // Simulate network latency
  });
}

async function fetchSequentially(ids) {
  const results = [];

  for (let i = 0; i < ids2.length; i++) {
    try {
      const response = await fetchById(ids[i]);
      results.push(response);
    } catch (error) {
      console.warn(`Failed to fetch ID: ${ids[i]}`, error);
      results.push(null); // or handle it another way
    }
  }

  return results;
}

// Run it
fetchSequentially(ids).then(responses => {
  console.log("Sequential responses:", responses);
});


// ----------------------------------


const ids3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function fetchById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) { // 20% chance to simulate failure
        reject(`Error fetching ID: ${id}`);
      } else {
        console.log(`Fetched for ID: ${id}`);
        resolve(`Response for ID: ${id}`);
      }
    }, Math.random() * 1000); // Simulate network latency
  });
}

// slice(start, end) in JavaScript is used to extract a portion of an array without modifying the original array.
// start → index from where extraction begins (inclusive).
// end → index where extraction stops (exclusive).

async function fetchInBatches(ids, batchSize) {
  const results = [];
  let i = 0;
  // Process in batches
  while (i < ids.length) {
    const batch = ids.slice(i, i + batchSize); // Get a batch of ids
    const batchPromise = batch.map(id => fetchById(id));
    const batchResults = await Promise.allSettled(batchPromise);

    // Handle batch results
    batchResults.forEach((result, index) => {
      if (result.status === "fulfilled") {
        results.push(result.value);
      } else {
        console.warn(`Failed for ID ${batch[index]}:`, result.reason);
        results.push(null); // or handle failure differently
      }
    });

    i += batchSize; // Move to the next batch
  }

  return results;
}

// Run it
fetchInBatches(ids3, 3).then(responses => {
  console.log("Batch responses:", responses);
});



// -------------------------------------------------------

// cancellable promise start

// ---------------------
// Cancellable Promise function
// ---------------------

// https://freedium.cfd/https://towardsdev.com/javascript-create-a-cancellable-promise-4a99dd2d88e7

const promise = new Promise((res, rej) => {
  setTimeout(() => rej("rejected because of error"), 1000);
});

const cancellablePromise = (promise) => {
  let rejectFn;
  const newPromise = new Promise((res, rej) => {
    rejectFn = rej;
    promise
      .then(res)
      .catch(rej);
  });
  newPromise.cancel = () => {
    rejectFn("the promise got cancelled");
  };
  return newPromise;
};


// -------------------- USAGE ---------------------------
//  CANCELLING THE PROMISE
const newCancellablePromise = cancellablePromise(promise);

newCancellablePromise.then(console.log);
newCancellablePromise.catch(console.log);

setTimeout(()=> newCancellablePromise.cancel(), 200) // cancels before the resolution the promise 

// output 
// the promise got cancelled

// -------------------- USAGE ---------------------------
//  THE PROMISE GETS REJECTED BECAUSE OF ERROR

const newCancellablePromise2 = cancellablePromise(promise);

newCancellablePromise2.then(console.log);
newCancellablePromise2.catch(console.log);

setTimeout(()=> newCancellablePromise2.cancel(), 2000) // cancels before the resolution the promise

// output 
// rejected because of error

  // cancellable promise end


  // ---------------------------------------

  // retry promise start

// https://www.youtube.com/watch?v=dILl2cAfP9c



  // Retry promise for specific number of times

  // input
  // retry(asyncFunc, retries=3, delay=100, finalErr = 'Failed');

  // Output
  // retry 1 -> failed
  // retry 2 -> retry after 100ms -> failed
  // retry 3 -> retry after 100ms -> failed
  // Failed

  // Observations
  // we can use promise or async/await. we will use async await
  // retry mechanism -> automatically reattempt for a number of times before giving
  // delay between retries

  // Approach
  // create a delay function
  // retry function => for a particular delay and for n number of times
  // we can use loop based or recursion based approach

  //create a delay function

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function retryWithDelay(operation, retries = 3, delay = 100, finalErr = 'Retry failed') {
  try {
    const result = await operation();
    return result;
  } catch {
    if (retries <= 0) {
      return Promise.reject(finalErr);
    }
    await wait(delay);
    return retryWithDelay(operation, retries - 1, delay, finalErr);
  }
}


    // retry promise end


    // ------------------------------

    // promise.all
    // https://www.youtube.com/watch?v=TH68g6Xtopg

    //observations
     //  1 - takes an array of promise
     //  2 - returns a single promise
     //  3 - return promise is fulfilled when all of them fulfilled including empty array
     //  4 - returns rejected promise with the first rejection reason

     //approach
     // 1 - iterate over array of promise
     // 2 - track the resolution status of each promise
     // 3 - if all the promises resolved, resolve the new Promise with an array of resolved values.
     // 4 - if any promise rejects, reject with the first rejection reason

     function promiseAll(promises){
      let results = [];
      let completedPromises = 0;
      return new Promise((resolve, reject)=>{
        promises.forEach((promise, index) => {
          Promise.resolve(promise).then(value =>{  // promise.resolve is only because in the array we can pass non promise (like any number) values and for that it is required.
            results[index] = value;
            completedPromises++;
            if(completedPromises === promises.length){
              resolve(results);
            }
          }).catch(reject)
        })
      })
     }


    // promise.any
    // https://www.youtube.com/watch?v=D68prlhelBM

     // observations
     // 1 - iterable of promises and return a single promise
     // 2 - return promise is fulfilled with the first fullfilment value
     // 3 - rejects when all of the input promises reject including an empty array
     // 4 - contains an array of rejection reason.

     // Approach

    // 1 - create a new promise to track fulfilment / rejection
    // 2 - iterate over the array of promises
    // 3 - resolve the promise as soon as any promise in the array fulfils
    // 4 - if all promises reject, reject the new Promise with the array of rejection reasons

     function promiseAny(promises){
      let reasons = []
      let rejectedCount=0;
      return new Promise((resolve, reject) => {
        promises.forEach((promise, index)=>{
          Promise.resolve(promise)
          .then(value => resolve(value))                // promise.resolve is only because in the array we can pass non promise (like any number) values and for that it is required.
          .catch(reason => {
            reasons.push(reason);
            rejectedCount++;
            if(rejectedCount===promises.length){
              reject (new Error('All promises were rejected'))
            }
          })
        })
      })
     }



    // promise.race
    // https://www.youtube.com/watch?v=kDLxSc4QRHY&t=302s

    // Observations
    // 1 - takes array of promises and return single promise
    // 2 - this returns promise settles with the first promise that settles

    // Approach

    // 1 - iterate through the promise array
    // 2 - returned promise will settle(either resolve or reject) as soon as first promise settles
    // 3 - if the promise resolves, the returned promise resolves with the same value.
      // - if the first promise rejects, the returned rejects with the same reason.

    function promiseRace(promises){
      return new Promise((resolve, reject)=>{
        promises.forEach((promise) => {
          Promise.resolve(promise)
          .then(value => {
          // If this promise fulfills first, resolve the outer promise
          resolve(value);
        })
        .catch(error => {
          // If this promise rejects first, reject the outer promise
          reject(error);
        });
        })
      })
    }



    // promise.allSettled

    // promise.allSettled

// Observations
// 1 - Takes an array (iterable) of promises and returns a single promise
// 2 - The returned promise fulfills when *all* input promises have settled
// 3 - "Settled" means either fulfilled or rejected
// 4 - The result is an array of objects with the form:
//     { status: "fulfilled", value: ... } for resolved promises
//     { status: "rejected", reason: ... } for rejected promises
// 5 - Special case: if input is an empty array, it should resolve immediately with []

// Approach
// 1 - Create an array to store the result for each promise
// 2 - Iterate over all promises
// 3 - For each promise, wrap it with Promise.resolve (to handle non-promise values)
// 4 - On fulfillment → store { status: "fulfilled", value }
//     On rejection   → store { status: "rejected", reason }
// 5 - Track the number of completed promises
// 6 - When all are settled, resolve the outer promise with the results array

function promiseAllSettled(promises) {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  let results = [];
  let completed = 0;

  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = { status: "fulfilled", value };
        })
        .catch(reason => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

const promises = [
  Promise.resolve(10),
  Promise.reject("error"),
  42
];

promiseAllSettled(promises).then(console.log);

// [
//   { status: "fulfilled", value: 10 },
//   { status: "rejected", reason: "error" },
//   { status: "fulfilled", value: 42 }
// ]

/*
| Method                 | Input                      | When does it resolve?                                                  | When does it reject?                                           | Return Value                                                                                          | Empty Array Behavior                            |
| ---------------------- | -------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **Promise.all**        | Array/iterable of promises | When **all promises fulfill** (including non-promises)                 | Immediately on the **first rejection**                         | An array of fulfillment values in the same order as input                                             | ✅ Resolves immediately with `[]`                |
| **Promise.any**        | Array/iterable of promises | Immediately on the **first fulfillment**                               | When **all promises reject**                                   | The first fulfilled value, or `AggregateError` containing all rejection reasons                       | ❌ Rejects immediately with `AggregateError([])` |
| **Promise.race**       | Array/iterable of promises | Immediately when the **first promise settles** (fulfilled or rejected) | Immediately when the **first promise settles** (if it rejects) | Value/reason of the first settled promise                                                             | ⏳ Never settles (stays pending forever)         |
| **Promise.allSettled** | Array/iterable of promises | When **all promises settle** (fulfilled or rejected)                   | ❌ Never rejects                                                | An array of objects: `{ status: "fulfilled", value }` or `{ status: "rejected", reason }` per promise | ✅ Resolves immediately with `[]`                |

*/

     


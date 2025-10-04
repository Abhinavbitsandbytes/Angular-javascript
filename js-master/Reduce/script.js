array.reduce(callbackFn, initialValue)

// If you don’t provide initialValue:
// accumulator will be the first element of the array
// currentValue will be the second element
// This means reduce() will skip the first element in the loop because it's used as the initial accumulator

// const numbers = [6, 5, 9, 4, 8]; 
// const sum = numbers.reduce((acc, curr) => acc + curr);
// console.log(sum);

// Initial Setup

// numbers = [6, 5, 9, 4, 8]

// reduce called without initial value.
// 👉 So:

// acc = first element = 6

// Iteration starts from the second element (5).

// Iterations
// Iteration 1 (index 1)

// acc = 6

// curr = 5

// Compute: 6 + 5 = 11

// New acc = 11

// Iteration 2 (index 2)

// acc = 11

// curr = 9

// Compute: 11 + 9 = 20

// New acc = 20

// Iteration 3 (index 3)

// acc = 20

// curr = 4

// Compute: 20 + 4 = 24

// New acc = 24

// Iteration 4 (index 4)

// acc = 24

// curr = 8

// Compute: 24 + 8 = 32

// New acc = 32

// ----------------------------------------------

// const numbers = [6, 5, 9, 4, 8]; 
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);
// Initial Setup
// numbers = [6, 5, 9, 4, 8]

// reduce called with initial value = 0
// 👉 So:

// acc = 0 initially

// Iteration starts from the first element (6), not the second.

// Iterations
// Iteration 1 (index 0)
// acc = 0

// curr = 6

// Compute: 0 + 6 = 6

// New acc = 6

// Iteration 2 (index 1)
// acc = 6

// curr = 5

// Compute: 6 + 5 = 11

// New acc = 11

// Iteration 3 (index 2)
// acc = 11

// curr = 9

// Compute: 11 + 9 = 20

// New acc = 20

// Iteration 4 (index 3)
// acc = 20

// curr = 4

// Compute: 20 + 4 = 24

// New acc = 24

// Iteration 5 (index 4)
// acc = 24

// curr = 8

// Compute: 24 + 8 = 32

// New acc = 32

// --------------------------------------------



// Sum of array elements
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// find max value
const numbers2 = [10, 5, 30, 8];
const max = numbers2.reduce((acc, curr) => (curr > acc ? curr : acc), numbers2[0]);
console.log(max); // 30

// https://chatgpt.com/c/680c6c0e-38b8-8001-8600-173f9df5651d - dry run
// there's no explicit line that says "acc = curr", the return value from each iteration automatically becomes the new acc.


//  Count frequency of items
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

//Given an array of people, group them by age.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
  ];
  
  const groupedByAge = people.reduce((acc, person) => {
    const key = person.age;
    acc[key] = acc[key] || [];
    acc[key].push(person);
    return acc;
  }, {});
  
//   console.log(groupedByAge);
  
//   {
//     25: [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
//     30: [ { name: 'Bob', age: 30 } ]
//   }

// ---------------------------------

// Convert array of objects into a lookup object
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
  
//   console.log(userMap);
//   {
//     1: { id: 1, name: 'Alice' },
//     2: { id: 2, name: 'Bob' }
//   }
  
// ---------------------------------

// Count how many people have each role.
const team = [
    { name: 'Alice', role: 'dev' },
    { name: 'Bob', role: 'designer' },
    { name: 'Charlie', role: 'dev' },
  ];
  
  const roleCount = team.reduce((acc, member) => {
    acc[member.role] = (acc[member.role] || 0) + 1;
    return acc;
  }, {});
  
//   console.log(roleCount);
//   {
//     dev: 2,
//     designer: 1
//   }
    

// -------------------------------
const orders = [
  { amount: 250, status: 'delivered' },
  { amount: 450, status: 'pending' },
  { amount: 150, status: 'delivered' }
];
// Find total amount of only 'delivered' orders.


const ans4 = orders.reduce((acc, curr)=>{
  const temp = (curr.status==='delivered')?curr.amount : 0;
  acc=acc+temp;
  return acc;
} ,0)

// -------------------------------------------------------

const keys = ['id', 'name'];
const values = [1, 'John'];
// Output: { id: 1, name: 'John' }

const result = keys.reduce((acc, key, index) => {
  console.log(key)
acc[key] = values[index];
return acc;
}, {});

// -----------------------------------------------------------



const numbers4 = [40,10, 5, 30, 8];

const ans1 = numbers4.reduce((acc, curr)=>{
  return   curr > acc ? curr : acc
})

vs 

const ans = numbers4.reduce((acc, curr)=>{
  return   curr > acc ? curr : acc
}, numbers[0])

// 1st one:

// const ans = numbers.reduce((acc, curr) => {
//   return curr > acc ? curr : acc;
// });
// Here, no initial value is given to reduce().

// So by default, acc starts as numbers[0] (40), and curr starts from numbers[1] (10).

// It still works fine because you have numbers already — but only if the array is not empty.

// ------------

// 2nd one:
// const ans = numbers.reduce((acc, curr) => {
//   return curr > acc ? curr : acc;
// }, numbers[0]);
// Here, you are explicitly setting the initial value as numbers[0] (40).

// So acc = 40, and curr will start from numbers[0] again (first element, not second).

// Slight difference: here, comparison happens one extra time but it's safer if you want to be 100% sure about starting value, or if your array might be sometimes empty.


// --------------------------------

function flattenDeep(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)
  , []);
}

const arr = [1, [2, [3, [4, 5]]]];

const fullyFlattened = flattenDeep(arr);

console.log(fullyFlattened); 
// Output: [1, 2, 3, 4, 5] ✅





// -----------------------

let arrr = [45];
arrr.reduce((acc, curr) => {
    return curr + acc;
});

// 1- Array: [1]

// 2- No initial value is passed to reduce, so:

//     acc = 1 (first element)

//     There is no second element, so the callback never runs

// 3- Therefore, reduce just returns the first element (1) without executing the function.
// output=45



// https://www.youtube.com/watch?v=s1XVfm5mIuU
// https://medium.com/@stheodorejohn/deep-dive-into-the-reduce-function-with-practical-examples-20161e3af11b
// https://www.devoreur2code.com/blog/javascript-reduce-method



  
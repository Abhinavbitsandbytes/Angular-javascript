// 1. Theory: What is reduce?

// reduce is an array method that reduces an array to a single value (number, string, object, array, etc.) by executing a callback function for each element in the array.

// Syntax:

array.reduce((accumulator, currentValue, currentIndex, array) => {
    // logic
}, initialValue);


// Parameters:

// accumulator → keeps track of the accumulated value from previous iterations.

// currentValue → the current element being processed.

// currentIndex (optional) → index of the current element.

// array (optional) → the original array.

// initialValue → initial value of the accumulator. If not provided, the first array element is used as initial accumulator and iteration starts from the second element.

// 2. Basic Example: Sum of numbers
const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers2.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 15


// acc starts at 0.

// curr goes through each number.

// Final result is a single number → 15.

// 3. Practical Applications of reduce

// We’ll go from simple to advanced, covering common patterns for interviews and projects.

// a) Sum / Product / Max / Min

// Product:

const product = [1, 2, 3, 4].reduce((acc, curr) => acc * curr, 1);
console.log(product); // 24


// Max value:

const max = [5, 9, 2, 7].reduce((acc, curr) => Math.max(acc, curr));
console.log(max); // 9


// Min value:

const min = [5, 9, 2, 7].reduce((acc, curr) => Math.min(acc, curr));
console.log(min); // 2

// b) Flattening an array of arrays
const arr2 = [[1, 2], [3, 4], [5, 6]];

const flat2 = arr2.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat2); // [1,2,3,4,5,6]

// c) Counting occurrences (frequency map)
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(count); 
// { apple: 3, banana: 2, orange: 1 }

// d) Grouping objects by a property
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 }
];

const grouped = people.reduce((acc, person) => {
    const key = person.age;
    if (!acc[key]) acc[key] = [];
    acc[key].push(person.name);
    return acc;
}, {});

console.log(grouped);
// { '21': ['Alice', 'Charlie'], '25': ['Bob'] }

// e) Removing duplicates
const numbers3 = [1, 2, 2, 3, 4, 4, 5];

const unique = numbers3.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
}, []);

console.log(unique); // [1,2,3,4,5]

// f) Transforming array to object
const users2 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const userObj = users2.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});

console.log(userObj);
// { '1': 'Alice', '2': 'Bob' }

// g) Chaining reduce with other methods
const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(n => n % 2 === 0) // only even numbers
    .reduce((acc, n) => acc + n, 0); // sum of even numbers

console.log(result); // 6 (2 + 4)

// h) Advanced: Implementing map with reduce
const arr3 = [1, 2, 3];

const mapped = arr3.reduce((acc, curr) => {
    acc.push(curr * 2);
    return acc;
}, []);

console.log(mapped); // [2, 4, 6]

// i) Advanced: Implementing filter with reduce
const arr = [1, 2, 3, 4];

const filtered = arr.reduce((acc, curr) => {
    if (curr % 2 === 0) acc.push(curr);
    return acc;
}, []);

console.log(filtered); // [2, 4]

// j) Flatten nested objects / deep flatten
const nested = [
  { id: 1, values: [1,2] },
  { id: 2, values: [3,4] }
];

const flat = nested.reduce((acc, obj) => acc.concat(obj.values), []);

console.log(flat); // [1,2,3,4]


// ✅ Patterns to remember for senior interviews:

// Aggregation: sum, product, max, min.

// Frequency count: count occurrences of values.

// Grouping by property: often used in analytics dashboards.

// Transform array → object: mapping IDs, usernames, or key-value pairs.

// Flattening arrays or nested arrays: useful for UI components or API data.

// Remove duplicates: clean data for display.

// Implementing map/filter: shows deep understanding.

// Complex data transformations: combining multiple operations in a single reduce.

// If you want, I can create a complete “reduce mastery guide” with 20+ real interview and project examples, step-by-step explanations, and tricky patterns that almost always come in senior frontend interviews.

// Do you want me to do that next?

// You said:
// few more real world coding examples
// ChatGPT said:

// Perfect! Let’s go deeper with real-world scenarios where reduce shines in senior frontend projects. I’ll provide examples with explanations so you can use them in projects or interviews.

// 1️⃣ Merge multiple API responses into one object

// Suppose your frontend receives multiple API responses for user data:

const apiResponses = [
  { id: 1, name: "Alice", score: 80 },
  { id: 2, name: "Bob", score: 90 },
  { id: 1, name: "Alice", score: 85 },
];

const merged = apiResponses.reduce((acc, curr) => {
  if (!acc[curr.id]) acc[curr.id] = { ...curr };
  else acc[curr.id].score += curr.score;
  return acc;
}, {});

console.log(merged);
/*
{
  '1': { id: 1, name: 'Alice', score: 165 },
  '2': { id: 2, name: 'Bob', score: 90 }
}
*/


// ✅ Use case: Aggregating scores or data from multiple API calls.

// 2️⃣ Calculate total price from a shopping cart
const cart = [
  { product: "Laptop", price: 50000, quantity: 1 },
  { product: "Mouse", price: 500, quantity: 2 },
  { product: "Keyboard", price: 1000, quantity: 1 },
];

const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log(total); // 52000


// ✅ Use case: E-commerce checkout, invoice calculation.

// 3️⃣ Build a nested menu structure
const menuItems = [
  { id: 1, parent: null, name: "Home" },
  { id: 2, parent: null, name: "Products" },
  { id: 3, parent: 2, name: "Laptop" },
  { id: 4, parent: 2, name: "Phone" },
];

const menuTree = menuItems.reduce((acc, item) => {
  if (item.parent === null) {
    acc.push({ ...item, children: [] });
  } else {
    const parent = acc.find(p => p.id === item.parent);
    if (parent) parent.children.push(item);
  }
  return acc;
}, []);

console.log(menuTree);
/*
[
  { id: 1, parent: null, name: 'Home', children: [] },
  { id: 2, parent: null, name: 'Products', children: [
      { id: 3, parent: 2, name: 'Laptop' },
      { id: 4, parent: 2, name: 'Phone' }
  ] }
]
*/


// ✅ Use case: Dynamic navigation menus in dashboards.

// 4️⃣ Summarize form data

// Imagine a dynamic form with checkboxes:

const formData = [
  { field: "hobbies", value: "reading" },
  { field: "hobbies", value: "gaming" },
  { field: "hobbies", value: "traveling" },
];

const summary = formData.reduce((acc, { field, value }) => {
  if (!acc[field]) acc[field] = [];
  acc[field].push(value);
  return acc;
}, {});

console.log(summary);
// { hobbies: ['reading', 'gaming', 'traveling'] }


// ✅ Use case: Collecting and grouping multi-select form values.

// 5️⃣ Count words in a string
const text = "JavaScript reduce is powerful and reduce is flexible";

const wordCount = text
  .split(" ")
  .reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

console.log(wordCount);
/*
{
  JavaScript: 1,
  reduce: 2,
  is: 2,
  powerful: 1,
  and: 1,
  flexible: 1
}
*/


// ✅ Use case: Analytics, search keyword frequency, or highlighting repeated words in content.

// 6️⃣ Filter and transform API data in one pass
const users = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 }
];

const adultNames = users.reduce((acc, user) => {
  if (user.age >= 18) acc.push(user.name.toUpperCase());
  return acc;
}, []);

console.log(adultNames); // ['ALICE', 'CHARLIE']


// ✅ Use case: Filter + transform data for rendering UI in a single reduce.

// 7️⃣ Build a grouped chart data
const sales = [
  { region: "North", amount: 100 },
  { region: "South", amount: 150 },
  { region: "North", amount: 200 },
  { region: "South", amount: 50 }
];

const chartData = sales.reduce((acc, { region, amount }) => {
  acc[region] = (acc[region] || 0) + amount;
  return acc;
}, {});

console.log(chartData); // { North: 300, South: 200 }


// ✅ Use case: Aggregating data for Highcharts, D3.js, or dashboards.

// 8️⃣ Convert query string to object
const query = "name=Alice&age=25&city=Delhi";

const queryObj = query.split("&").reduce((acc, pair) => {
  const [key, value] = pair.split("=");
  acc[key] = value;
  return acc;
}, {});

console.log(queryObj); // { name: 'Alice', age: '25', city: 'Delhi' }


// ✅ Use case: Parsing URL parameters in single-page apps.
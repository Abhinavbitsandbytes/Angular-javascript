const keys = ['id', 'name'];
const values = [1, 'John'];
// Output: { id: 1, name: 'John' }

const ans = keys.reduce((acc, curr, index)=>{
  acc[curr] = values[index];
  return acc;
}, {})
console.log(ans);
let arr = [
    {
        name: 'yoyo',
        age: 6
    },
    {
        name: 'aoyo',
        age: 6
    },
    {
        name: 'fims',
        age: 6
    },
    {
        name: 'ritz',
        age: 6
    },
]
arr.sort((a,b )=>{
    if (a.name.toLowerCase() < b.name.toLowerCase()){
        return -1;
    }
    else if (a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
    }
    else{
        return 0;
    }
})

console.log(arr);


// Negative value (-1):
// This means do not swap because the first element (a) is already in the correct order, i.e., it should come before the second element (b).
// Zero (0):
// This means the two elements are considered equal, so no swap is needed.
// Positive value (1):
// This means swap the elements because the first element (a) should come after the second element (b).


// Recap:
// In JavaScript sorting:

// -1 means do not swap.
// 1 means swap.

// same for java






// merge sort

function mergeSort(array) {
  // Base case: an array of zero or one element is already sorted
  if (array.length <= 1) {
      return array;
  }


  // Step 1: Divide the array into halves
  const mid = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, mid));
  const rightHalf = mergeSort(array.slice(mid));


  // Step 2: Merge the sorted halves
  return merge(leftHalf, rightHalf);
}


function merge(left, right) {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;


  // Step 3: Compare elements from both halves and merge
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          sortedArray.push(left[leftIndex]);
          leftIndex++;
      } else {
          sortedArray.push(right[rightIndex]);
          rightIndex++;
      }
  }


  // Step 4: Concatenate any remaining elements
  return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]



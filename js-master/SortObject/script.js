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
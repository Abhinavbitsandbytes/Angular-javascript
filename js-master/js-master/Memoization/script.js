
function sum(n){
let acc=0;
for(let i=0; i<n;i++){
acc=acc+i;
}
return acc;
}

function memoize(fn){
    let cache = {};
    return function(...args){
        // args will have value which we will pass while calling memoized()
    let n = args[0];
    if(n in cache){
        return cache[n]
    }
    else{
        const data = fn(n);
        cache[n]=data;
        return data;
    }
}
}
const memoized = memoize(sum)
// memoized(5)



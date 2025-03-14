function saveData() {
    console.log('saving...')
}
function better(fn, d) {
    let last = 0;
    return function () {
        let context=this;
        let args = argument
        const now = new Date().getTime();
        if (now - last < d) {
            return;
        }
        last = now;
        fn.apply(context, args);
    }
}
const throttle = better(saveData, 2000)





//MEMOIZATION
// const calc= (n) =>{
//     let sum=0;
//     for(let i=0; i< n; i++){
//         sum+=i;
//     }
//     return sum;
// }
//  function memoize(fn) {
// let cache={};
// return function (...args){
//     console.log(args)
//     let n = args[0];
//     if(n in cache){
//         return cache[n]
//     }
//     else{
//      let result = fn(n);
//      cache[n] = result;
//      return result;
//     }
// }
// }

// const run = memoize(calc);
// console.log(run(1000))
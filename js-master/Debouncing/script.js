
function getData(...p){
    console.log('fetching data from api...');
    console.log(p)
}
function doSomeMagic(fn, d){
    let timer;
    return function (...args){
        let context=this;
        console.log(timer); // 1 2 3 4 5 6 7 8 9 10 ......
        clearTimeout(timer)
        timer = setTimeout(() => {
        fn.apply(context, args);
    }, d);
}
}
const betterFunction = doSomeMagic(getData, 700)
betterFunction("Ggg", "ggggtfd")







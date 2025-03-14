
function getData(){
    console.log('fetching data from api...')
}
function doSomeMagic(fn, d){
    let timer;
    return function (...args){
        let context=this;
    clearTimeout(timer)
   timer = setTimeout(() => {
        fn.apply(context, args);
    }, d);
}
}
const betterFunction = doSomeMagic(getData, 700)







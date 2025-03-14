


function getData(){
    console.log('fetching...')
}


function debounce(fn, d){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn();
        },d)
    }
}








const better = debounce(getData, 500);
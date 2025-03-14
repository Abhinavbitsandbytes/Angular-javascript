
function getData(){
    console.log("fetching from api...");
}

function doMagic(fn,d){
let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
fn()
        },d)
    }
}

const betterFunction = doMagic(getData, 1000);
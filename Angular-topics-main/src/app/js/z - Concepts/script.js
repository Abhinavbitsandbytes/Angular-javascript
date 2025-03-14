let data = {
    1: ['a', 'b', 'c', 'd', 'e'],
    2: ['g', 'h', 'i', 'j', 'k'],
    3: ['l', 'm', 'n', 'o', 'p']
}
let ans = [];

let i = 0


for (var key in data) {

    ans.push(data[key])
        
    
    
}




const arrayColumn = (arr, n) => arr.map(x => x[n]);


for(let i=0; i<ans.length; i++){
console.log(arrayColumn(ans, i));
}



<<<<<<< HEAD
console.log(sum(5)(10)(15)(20)(25)());

function sum(a){

return function(b){

if(b){
return sum(a + b)

} else{
return a;
}

}

}
=======
function greet(lang){
    console.log(`Hello ${this.name} ${lang}`);
}
const obj1 = {
    name: 'Abhinav'
}
const obj2 = {
    name: 'Not Abhinav'
}

greet.apply(obj1, ["en"]);
greet.apply(obj2, ["es"]);
>>>>>>> 26c19768dc027996d11fa153c9fe6d3d59c1e6bf

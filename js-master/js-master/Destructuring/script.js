// https://www.youtube.com/watch?v=9dQ38beIC-M


const colors = ['red', 'green', 'yellow', 'pink', 'black']; 

//without destructuring
// const color1 = colors[0];
// const color2 = colors[1];
// const color3 = colors[2];

//with destructuring
const [color1, color2, color3] = colors;

const [a,b,c,d,e,f] = colors;
// f will be undefined


const [,,col3] = colors;
console.log(col3); // yellow

// -------------------------

const user = {
name: 'abhinav',
age: 25,
address: {
    ciyy: 'bangalore',
    state: 'karnataka'
}
}

// without destructuring
// const name = user.name;
// const age = user.age;

// with destructuring
const {name, age} = user;

//aliasing
const {name: myName, age: myAge} = user;

const {address: {city}} = user;

// ------------------------------------------

function intro({age}){
    console.log(age); // 25
}
intro(user);

function intro({age, name}){
    console.log(age, name); // 25 abhinav
}
intro(user);

// ------------------
// colors = ['red', 'green', 'yellow', 'pink', 'black']; 

function printColor([color1, color2]){
    console.log(color1, color2);
}
printColor(colors); // red green


function printColor2([color1, color2,,color4]){
    console.log(color1, color2, color3);
}
printColor2(colors); // red green pink



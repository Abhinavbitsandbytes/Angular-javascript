// readonly and optional

type User = {
   readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number

}

let myUser: User = {
   _id: "1234",
   name: "Abhi",
   email: "abhi@gmail.com",
   isActive: false
}

myUser.email = "change@gmail"  // okay
myUser._id = "fkrmmf"  // not okay since _id is read only.

// if it was an array, we should have able to push items.

// --------------

// Arrays

const superHeroes = [];
superHeroes.push("hello")  //Argument of type '"hello"' is not assignable to parameter of type 'never'

const superHeroes2: string[] = [];
superHeroes2.push("hello");

type User2 = {
    name: string
    isActive: boolean
}

const allUsers: User2[] = [];
allUsers.push({name:" ", isActive: true})

// ------------------------
// union type

let score: number | string = 44;
score = "55"

type User3 = {
    name: string;
    id: number
}

type Admin = {
    username: string,
    id: number
}

let abhi: User3 | Admin = {name: "Abhi", id:444}
abhi = {username: "ag", id:444}

function getDbId(id: number | string){

}

getDbId(6);
getDbId("6");

function getDbId2(id: number | string){
    id.toLowerCase() //Property 'toLowerCase' does not exist on type 'string | number'. Property 'toLowerCase' does not exist on type 'number'.

}

function getDbId3(id: number | string){
    if(typeof id==='string')
    id.toLowerCase() 
}

// --------------------

// Arrays

const data: number[] = [1,2,3]
const data2: string[] = ["1", "2", "3"]
const data3: string[] | number[] = [1,"2",3] // still you cannot mix and match. Either all items should be a number or string
const data4: (string | number)[] = [1,"2",3]

// ------------------------

//tuples - A tuple in TypeScript is a typed array with a fixed number of elements, where each element may have a different type.
//
let userInfo: [string, number];
userInfo = ['Alice', 30]; // ✅ OK
userInfo = [30, 'Alice']; // ❌ Error: Types don't match


// -----------------------------------
// Enum - In TypeScript, enums (short for enumerations) are a feature that allows you to define a set of named constants. They help make the code more readable and are often used to represent a collection of related values such as directions, states, or modes.
// Syntax (Numeric Enum by default)

enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

//default is always 0 and its go on increasing by 1

let move: Direction = Direction.Up;
console.log(move);           // 0
console.log(Direction[0]);   // 'Up'

// ----

// Custom Numeric Values
enum Status {
  Started = 1,
  InProgress = 3,
  Done = 5
}

// ---
// String Enums

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
// String enums do not have reverse mapping like numeric enums.

// -----------------------------
interface User6{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail:  () => string // function returning string
    // startTrail(): string  same as above
}

const name3: User6 = {
    dbId: 88,
     email:"abhi@gmail",
      userId:90900,
    startTrail: ()=>{
        return "trail started"
    }
    }


    // ----------

    // Declaration Merging (only works with interface)
   
    interface Person {
      name: string;
    }
    
    interface Person {
      age: number;
    }
    
    // Now Person has both `name` and `age`
    // ✅ Union Type (only works with type)
  
    type Status2 = "active" | "inactive";


    // ----------------------------------

    // What is Type Narrowing?
    // Type narrowing is when TypeScript intelligently reduces a broader type (like string | number) to a more specific one (like just string) based on checks you perform in the code.

    function printValue(val: string | number) {
        if (typeof val === "string") {
          console.log(val.toUpperCase()); // val is string here
        } else {
          console.log(val.toFixed(2));    // val is number here
        }
      }
      

    //   -----------

    class Animal {}
class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
// -------
function makeSound(pet: Animal) {
  if (pet instanceof Dog) {
    pet.bark(); // pet is Dog here
  }
}

// -----------
type Circle = { radius: number };
type Square = { side: number };

function area(shape: Circle | Square) {
  if ('radius' in shape) {
    return Math.PI * shape.radius ** 2; // shape is Circle
  } else {
    return shape.side ** 2;             // shape is Square
  }
}

// ---------

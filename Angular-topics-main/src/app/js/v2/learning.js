//1->  way to add class in js
controlEl.className = 'form-control error';
// --------------------------------------------------------------------------


//2-> way to check if node contains class or not 
e.target.classList.contains('seat')

// ----------------------------------------------------------------------------

//3-> way to toggle class
e.target.classList.toggle('selected')

// ---------------------------------------------------------------------------

// 4->Difference between className and classList

btnElement.classList.add('btn');
btnElement.className = 'btn';

// * Using classList, you can add or remove a class without affecting any
// other classes the element may have. classList has some handy methods like toggle and replace
// * If you use className, it will wipe out any existing classes while adding the new one
//  (or if you assign an empty string it will wipe out all of them).

// ---------------------------------------------------------------------------------

// 5-> DOM Selectors
// document.getElementById() -            document.getElementByID('selector-form')
// document.getElementsByClassName() -    document.getElementsByClassName('pretty-text')
// document.getElementsByTagName() -      document.getElementsByTagName('div')
// document.querySelector()
// document.querySelectorAll()

// ------------------------------------------------------

// -> get all nodes which are under class row with class seat and selected applied simultaneously
selectedSeats = document.querySelectorAll('.row .seat.selected').length


// -----------------------------------------------------------------------------


//-> way to get parent Node
     const parentNode = control.parentNode;

 // -------------------------------------------------------------------------------

//-> way to create variables in css
// :root { // add on top
//     --success - color: #2ecc71;
//     --error - color: #e74c3c;
// }

// .form - control.error input {
//     border - color: var(--error - color);
// }

// ---------------------------------------------------------------------------------

// -> way to add click handler in js
<button class="remove-btn" onClick="deleteTrans(${obj.id})">X</button>

// -> way to add click handler dynamically in .js file

let span = document.createElement('span');
span.setAttribute('onClick', `removeItem(${item.id})`)


// -----------------------------------------------------------------------------------
// -> way to append node
// only HTML node (div, span, li, etc) will work inside appendChild. you can't just appenChild strings.
//(like saving html code inside backticks and store in a variable as a strng won't work inside appendChild)
// I think append will add strings as well along with HTML node
const list = document.createElement('li');
TransList.appendChild(list);

// -----------------------------------------------------------------------------------

// -> way to set and get items in local storage
localStorage.setItem('trans', JSON.stringify(trans))
JSON.parse(localStorage.getItem('trans'))

// ---------------------------------------------------------------------------------

// another way to create element and assign attributes (first way was using innerHTML)
const srcEl = document.createElement('img');
srcEl.setAttribute('src', item.urls.regular)
srcEl.setAttribute('alt', item.id)
imageContainerEl.appendChild(srcEl);
// add function to the created element
var div = document.createElement('span');
span.setAttribute('onClick', `removeItem(${item.id})`)



// ----------------------------------------------------------------------------

// way to set and get data attributes

{/* 
    (   set data attributes )
    <div class="meal-name" data-mealId=${item.idMeal}> ${item.strMeal}</div>
    

 (get data attribute)

let mealInfo = '';
e.path.find(item => {
    if (item.classList && item.classList.contains('meal-name')) {
        mealInfo = item
    }
})

const mealID = mealInfo.getAttribute('data-mealId'); */}


// -----------------------------------------------------------------------------------

// Infinite scroll

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchImg();
    }
})

// -----------------------------------------------------------------------------------------
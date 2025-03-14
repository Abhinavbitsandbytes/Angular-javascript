

const url = 'https://type.fit/api/quotes';
const quoteEl = document.querySelector('#quote');
const authorEl = document.querySelector('#author');
const btnEl = document.querySelector('#btn');
//  ONE VERY IMPORTANT POINT TO NOTICE IS "HELLO" WILL BE PRINTED ONLY AFTER DATA WILL COME 
// FROM API IN CASE OF ASYNC AWAIT.

// IN CASE OF PROMISE "HELLO" WILL BE PRINTED IMMEDIATELY.

//Using Promise

 function generateQuote(){
    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
     const index = Math.floor((Math.random() * 10000) % data.length);
        quoteEl.innerText = data[index].text;
        authorEl.innerText = data[index].author
    })
    .catch(err=>{
    })

     console.log('hello');
}

// Using async await

// async function generateQuote() {
//     const response = await fetch(url);
//     const data = await response.json();
//     const index = Math.floor((Math.random() * 10000) % data.length);
//     quoteEl.innerText = data[index].text;
//     authorEl.innerText = data[index].author;

//     console.log('hello');
// }

generateQuote();

btnEl.addEventListener('click', (e)=>{
    generateQuote();
})
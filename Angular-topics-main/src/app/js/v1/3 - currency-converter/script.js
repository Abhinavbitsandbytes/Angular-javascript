const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');


function calculate(){
    const curr1 = currencyOne.value;
    const curr2 = currencyTwo.value
    fetch(`https://open.exchangerate-api.com/v6/latest/${currencyOne.value}`)
    .then((response) => {
     return   response.json()
    }) 
    .then((data)=>{
        const rate = data.rates[curr2] / data.rates[curr1];
        rateEl.innerHTML = `1${curr1} = ${rate} ${curr2}`;

    })
    .catch((error)=>{
        console.log(error)
    })
}


currencyOne.addEventListener('change', e =>{
    calculate();
})
currencyTwo.addEventListener('change', e =>{
    calculate();
})
amountOne.addEventListener('input', e=>{
    calculate();
})
amountTwo.addEventListener('input', e=>{
    calculate();
})

swapEl.addEventListener('click', e=>{
    const temp = currencyTwo.value;
    currencyTwo.value = currencyOne.value;
    currencyOne.value=temp;
    calculate();
})

calculate();


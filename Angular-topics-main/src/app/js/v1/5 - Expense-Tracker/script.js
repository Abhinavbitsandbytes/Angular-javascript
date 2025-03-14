const descriptionEl = document.querySelector('#description');
const amountEl = document.querySelector('#amount');
const btnEl = document.querySelector('#btn');
const historyListEl = document.querySelector('#history-list')
const totalExpenseEl = document.querySelector('#total-expense');
const totalIncomeEl = document.querySelector('#total-income');
const totalBalanceEl = document.querySelector('#total-balance')







let transactions = [];


function addTransactionDOM(obj){

        const item = document.createElement('li');
    item.classList.add(obj.amount < 0 ? 'minus' : 'plus');
     
        item.innerHTML = `
        <span>${obj.description}</span>
        <span>${obj.amount}</span>
         <button class="delete-btn" onclick="removeTransaction(${obj.id})">x</button>
        `
        historyListEl.appendChild(item);
        updateValues()
   

}


function updateValues(){
    let income = 0;
    let exp = 0;
    const amounts = transactions.map((item) =>{
        return item.amount
    })
    const total = amounts.reduce((item, acc)=>{
return acc = item + acc
    },0)

   
    amounts.forEach((item)=>{
        if(item>=0){
            income = income + item
        }
        else{
            exp = exp - item;
        }

    })
    totalBalanceEl.innerHTML = total;
    totalIncomeEl.innerHTML = income;
    totalExpenseEl.innerHTML=exp
   
    console.log(total)
}



function removeTransaction(id){
    transactions = transactions.filter((item) => {
        return item.id !== id;
    })
    init();
}


btnEl.addEventListener('click', e =>{
  const obj = {
      id: Math.random(),
      description: descriptionEl.value,
      amount: +amountEl.value
  }
  transactions.push(obj);
    addTransactionDOM(obj);
})

function init() {
    historyListEl.innerHTML = '';
    transactions.forEach((item)=>{
        addTransactionDOM(item)
    })

 
}

init();
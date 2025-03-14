const addTransEl = document.querySelector('#add-trans');
const messageEl = document.querySelector('#message');
const amountEl = document.querySelector('#amount');
const TransList = document.querySelector('#trans-list');
const incomeEl = document.querySelector('#income-amount');
const expenseEl = document.querySelector('#expense-amount');
const totalEl = document.querySelector('#total-balance');

const localStorageData = JSON.parse(localStorage.getItem('trans'))
let trans = localStorageData ? localStorageData :  [];

function addTransListToDom(obj){
    const list = document.createElement('li');
    list.classList.add(obj.amount>=0 ? 'plus' :'minus'  )
    list.innerHTML = `
    <ul>
    <div>${obj.message}</div>
    <div>${obj.amount}</div>
    <button class="remove-btn" onClick="deleteTrans(${obj.id})">X</button>
    </ul>
    `
    TransList.appendChild(list);
}

function deleteTrans(id){
    trans = trans.filter((item)=>{
        return item.id!==id
    })
    updateLocalStorage();
    init();
}
addTransEl.addEventListener('click', (e) =>{
    e.preventDefault()
    const obj ={
        message: messageEl.value,
        amount: +amountEl.value,
        id: Math.random()
    } 
    trans.push(obj);
    addTransListToDom(obj);
    updateValues();
    updateLocalStorage();
})

function updateValues(){
    let income = 0;
    let exp = 0;
    trans.forEach((item)=>{
        if(item.amount>=0){
            income = income + item.amount
        }
        else{
            exp = exp + item.amount;
        }
    })
    incomeEl.innerHTML = income;
    expenseEl.innerHTML = exp
    totalEl.innerHTML = income+exp;
}

function init(){
    TransList.innerHTML='';
    trans.forEach((item)=>{
        addTransListToDom(item)
    })
    updateValues();
}
function updateLocalStorage(){
    localStorage.setItem('trans', JSON.stringify(trans))
}

init()
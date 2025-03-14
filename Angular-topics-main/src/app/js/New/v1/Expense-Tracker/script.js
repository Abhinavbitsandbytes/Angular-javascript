
const expensList = document.getElementById('expense-list')
const text = document.getElementById('text');
const number = document.getElementById('number');
const btn = document.getElementById('btn')


var data = [];

function renderCards(item){
    let Div = document.createElement('div');
    Div.classList.add('expense-container')
    if(item.value>=0){
        Div.classList.add('plus');
    }
    else{
        Div.classList.add('minus');
    }
    Div.innerHTML =   `
         <div>${item.name}</div>
        <div>${item.value}</div> 
        `

    expensList.appendChild(Div)
}



btn.addEventListener('click', (e) =>{
    const obj = {
        id: Math.random(),
        name: text.value,
        value: +number.value
    }
    renderCards(obj);
})
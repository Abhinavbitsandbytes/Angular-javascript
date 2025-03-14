const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btn = document.getElementById('btn');



function showError(input, msg) {

    const fromControl = input.parentElement;
    fromControl.classList.add('error')
    
}



btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(username.value===''){
        showError(username, 'username is empty')
    }
})
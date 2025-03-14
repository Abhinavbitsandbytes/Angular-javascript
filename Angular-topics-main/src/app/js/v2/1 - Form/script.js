const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const submitbtn = document.querySelector('#submitbtn');

function checkValidation(){
    const fields = [username, email, password, password2];
    fields.forEach((control)=>{
        if(control.value===''){
            showError(control);
        }
        else{
            showSuccess(control);
        }
    })
}

function showError(control){
    const formControl = control.parentNode;
    formControl.className = 'form-control error';
    const errorField = formControl.querySelector('small')
    errorField.innerHtml = "required";
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Event listeners start
submitbtn.addEventListener('click', e=>{
    e.preventDefault()
    checkValidation()
})
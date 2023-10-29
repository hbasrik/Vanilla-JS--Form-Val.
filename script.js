const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className  = 'form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className  = 'form-control success';
}

function isValidEmail(email) {

    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

}


form.addEventListener('submit',function(e){
e.preventDefault();
    // console.log('submit');
    // console.log(username.value);

    if(username.value==='' ){
       showError(username, "Cannot be empty")
    }else {
        showSuccess(username);
    }

    if(email.value==='' ){
        showError(email, "Cannot be empty")
     }else if (!isValidEmail(email.value)){
        showError(email,"Email is not valid")
     }
     
     else {
         showSuccess(email);
     }

     if(password.value==='' ){
        showError(password, "Cannot be empty")
     }else {
         showSuccess(password);
     }

     if(password2.value==='' ){
        showError(password2, "Cannot be empty")
     }else {
         showSuccess(password2);
     }

});

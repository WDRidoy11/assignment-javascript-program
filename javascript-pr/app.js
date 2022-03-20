let submitButton = document.getElementById('button');
let heading = document.querySelectorAll('.output h3');
let myForm = document.getElementById('myform');

const userInformation = () => {
    let userName = document.getElementById('userName').value;
    let userEmail = document.getElementById('mail').value;
    let userPassword = document.getElementById('password').value;
    heading[0].innerHTML = userName;
    heading[1].innerHTML = userEmail;
    heading[2].innerHTML = userPassword;
}

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    userInformation();
})
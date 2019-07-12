//input
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var nameInput = document.getElementById('nameInput');


//criando um novo usuário
createUserbutton.addEventListener('click',function(){
    firebase
    .auth()
    .createUserWithEmailAndPassword(emailInput.value,passwordInput.value)
    .then(function(){
        alert('Bem Vindo'+nameInput.value);

    })
    .catch(function(error){
        console.error(error.code);
        console.error(error.message);
        alert('Falha ao Cadatro.')
    });

});
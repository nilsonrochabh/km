var authEmailPassButton = document.getElementById('authEmailPassButton');
// var authGitHubbutton= document.getElementById('authGitHubbutton');
var authFacebookbutton= document.getElementById('authFacebookbutton');
// var authTwitterbutton= document.getElementById('authTwitterbutton');
var authGooglebutton= document.getElementById('authGooglebutton');
// var createUserbutton= document.getElementById('createUserButton');
//var logOutbutton =  document.getElementById('logOutbutton');

//input
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var nameInput = document.getElementById('nameInput');

//displays
var displayName =  document.getElementById('displayName');

authEmailPassButton.addEventListener('click', function(){
    firebase
    .auth()
    .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function (result){
        console.log(result);
        window.location.href='cadastro_km.html';
        alert('Autenticado com o email '+ emailInput.value) ;
    })
    .catch(function(error){
        console.error(error.code);
        console.error(error.message);
        alert("falha ao autenticar")

    });
});
// logOutbutton.addEventListener('click', function(){
//     firebase
//     .auth()
//     .signOut()
//     .then(function(){
//         displayName.innerText="você não esta logado";
//         alert('você desligou');

//     },function(error){
//         console.error(error);
//     });

// });

authGooglebutton.addEventListener('click',function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider)
});
authFacebookbutton.addEventListener('click', function(){    
    var provider = new firebase.auth.FacebookAuthProvider();
    signIn(provider)
    
});
function signIn (provider){
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result){
            console.log(result);
            var token = result.credential.accessToken;
            displayName.innerText='Bem vindo '  +result.displayName;
        }).catch(function(error){
            console.error(error);
            alert('falha na autenticão');
        });
}
//var kmList = document.getElementById('kmList');
var displayName =  document.getElementById('displayName');
var nameInput = document.getElementById('nameInput');
var dateInput = document.getElementById('dateInput');
var kmInicialInput = document.getElementById('kmInicialInput');
var rota = document.getElementById('rota');
var kmFinalInput = document.getElementById('kmFinalInput');
var logOutbutton =  document.getElementById('logOutbutton');

//ao clicar no butto
addButton.addEventListener('click', function(){
    create(nameInput.value, 
        dateInput.value,
        kmInicialInput.value,
        rota.value,
        kmFinalInput.value);
});



function create (name, date, km_inicial, rota, km_final){
    var data = {
        name:name,
        date:date,
        km_inicial:km_inicial,
        rota:rota,
        km_final:km_final
    };
    return firebase.database().ref().child('km').push(data);
}


logOutbutton.addEventListener('click', function(){
    firebase
    .auth()
    .signOut()
    .then(function(){
        displayName.innerText="você não esta logado";
        alert('você desligou');

    },function(error){
        console.error(error);
    });

});

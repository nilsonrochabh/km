
var nameInput = document.getElementById('nameInput');
var dateInput = document.getElementById('dateInput');
var kmInicialInput = document.getElementById('kmInicialInput');
var rota = document.getElementById('rota');
var kmFinalInput = document.getElementById('kmFinalInput');


//ao clicar no butto
addButton.addEventListener('click', function(){
    create(nameInput.value, 
        dateInput.value,
        kmInicialInput.value,
        rota.value,
        kmFinalInput.value);
});
function create (nome, data, km_Inicial, rota, km_Final){
    var data = {
        nome:nome,
        data:data,
        km_Inicial:km_Inicial,
        rota:rota,
        km_Final:km_Final
    };
    return firebase.database().ref().child('Dados').push(data);
}


addButton.addEventListener('click', function(){
    document.getElementById('nameInput').value="";
    document.getElementById('dateInput').value="";
    document.getElementById('kmInicialInput').value="";
    document.getElementById('rota').value="";
    document.getElementById('kmFinalInput').value="";
});
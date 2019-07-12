var displayName =  document.getElementById('displayName');
var database = firebase.database().ref().child('km');


database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';
        
        snapshot.forEach(function(data){
          
            var name = data.val().name;
            var date= data.val().date;
            var km_inicial = data.val().km_inicial;
            var rota = data.val().rota;
            var km_final = data.val().km_final;

            content = '<tr>';
        
            content += '<td>' + name + '</td>'; //column1
            content += '<td>' + date + '</td>';//column2
            content += '<td>' + km_inicial + '</td>';//column2
            content += '<td>' + rota + '</td>';//column2
            content += '<td>' + km_final + '</td>';//column2
            content += '</tr>';
            $('#ex-table').append(content);
        });

     
    }
    console.log(snapshot.val());
});



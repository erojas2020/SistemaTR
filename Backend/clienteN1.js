function getData(email) {

console.log("user: "+email);
  var dataClientes = sheetClienteN1.getRange("A2:J").getValues();
  var clientes = [];

  for( var i in dataClientes){
    if (dataClientes[i][9] == email){
      
      clientes.push(dataClientes[i]);
      
    }
    
  }

  

 //Logger.log(clientes);
 //console.log(dataClientes);
 //Logger.log(dataClientes);
  return clientes;
}

function getDataTodo() {


  var dataClientes = sheetClienteN1.getRange("A2:J").getValues();

  //Logger.log(dataClientes);

  return dataClientes;
}


function validarEmailCliente(email){
 
  var dataClientes = sheetClienteN1.getDataRange().getValues();

for( var i in dataClientes){
 // Logger.log(dataClientes[i][4]);
    if (dataClientes[i][4] == email){
    
        return false;
    }
 
  }
  return true;
}

function validarCelularCliente(cel){
 
  var dataClientes = sheetClienteN1.getDataRange().getValues();

for( var i in dataClientes){

    if (dataClientes[i][3] == cel){
    
        return false;
    }
 
  }
  return true;
}

function registrarNuevoCliente1(form){

   var codigo_consecutivo = parseInt( sheetConfiguracion.getRange("B1").getValues());

    codigo_consecutivo++;

    

    var codigo= "CNI"+codigo_consecutivo;

  //var usuario = validarEmail();



   var fecha = new Date();
   
   var nombre = form.nombre;
   var codigoPais = form.pais;
   var area = form.area;
   var telefono = form.telefono;
   var email = form.email;
   var tj = form.radioTj;
   var familiar = form.radioFamiliar;
   var confiable = form.radioConfiable;
   var terminos = form.terminos;
   var pais = buscarNombrePaisporCodigo(codigoPais);
    var user = form.usuarioNivel1;
    var userName = form.nombreUserNivel1;


    console.log(form);   


   var celular = area + telefono; 

  
 if (!validarEmailCliente(email)){
   throw('Email ya existe');
 }else if (!validarCelularCliente(celular)) { 
    throw('Número de Celular ya existe');
 }else { 
   sheetClienteN1.appendRow([codigo, nombre, pais, celular, email, tj, familiar,confiable, userName, user, codigoPais, fecha ]);

    sheetConfiguracion.getRange("B1").setValue(codigo_consecutivo);
 }

 

}
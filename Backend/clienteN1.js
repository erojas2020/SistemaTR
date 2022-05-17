/*function getData(email) {

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
*/
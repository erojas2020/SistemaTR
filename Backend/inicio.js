/*function controllerLoginBackend(form){
 var email = form.email;
 var contrasena = form.contrasena; 
 var resultado;
 


resultado = validarNewUser(email);

 if(resultado){
  
    //console.log(resultado);
   return resultado;
   
 }else{
   resultado = validarLogin(email, contrasena);

    if (resultado){
      return resultado;
    }else { 
      return false;
    }
 }
  
}
*/


/*
  VALIDAR LOGIN
    -Verifica el email y la contraseña sea correctas.
    -Se requiere el email y contraseña. 
    Ejemplo: 

    validarLogin(email, contrasena);

   -Si la respuesta es TRUE, devuelve el siguiente objeto: 
   usuario = {
            nombre : Efrain Rojas,
            perfil : Administrador,
            email: efrainrojas19@gmail.com,
            
          }
  -Si la respuesta es FALSE, devuelve FALSE
*/
function validarLogin(email, contrasena){
 //console.log(form);

    var dataUsuarios = buscarUsuario(0,email);
  
   if((dataUsuarios.email == email) && (dataUsuarios.contrasena == contrasena)){
     var respuesta = {
       nombre: dataUsuarios.nombre,
       perfil: dataUsuarios.perfil,
       email: dataUsuarios.email

     }
     return respuesta;
   }
   
    return false;
    //throw('Datos no validos');
 }

  /** 
  *VALIDAR USUARIO NUEVO
  *Verifica si el usuario es nuevo, retorna TRUE O FALSE.
  */
  function validarNewUser(email){
    
    var datosUser = buscarUsuario(0,email);

    if(datosUser.usuarioNuevo==true){
        var  resultado = {
      newUser: true,
      login: false
      
    }
    return resultado;
    }else {
      return false
    }

  }

/*
 -BUSCA USUARIO
  -Busca todos los datos de un usuario o varios, filtrando por un dato especifico.
  -Se require la posicion por donde se va a filtrar y el dato que se va a buscar. 
  ejemplo 

  BuscarUsuario(0,"efrainrojas19@gmail.com");

  Devuelve un objeto de la siguiente formato: 

  resultado = {
            email: efrainrojas19@gmail.com,
            nombre: Efrain Rojas,
            perfil: Administrador,
            contrasena: 123,
            usuarioNuevo: FALSE,
            pregunta1: Cual es el nombre de mi mamá?,
            respuesta1: Betty,
            pregunta2: Mi aniversario,
            respuesta2: 18/08/2019
             
          }
*/
 function buscarUsuario(posicion, datos  ){
    var dataUsuarios = sheetUsuarios.getDataRange().getValues();

     for (var i in dataUsuarios){
        if(dataUsuarios[i][posicion]== datos){
          var resultado = {
            email: dataUsuarios[i][0],
            nombre: dataUsuarios[i][1],
            perfil: dataUsuarios[i][2],
            contrasena: dataUsuarios[i][3],
            usuarioNuevo: dataUsuarios[i][4],
            pregunta1: dataUsuarios[i][5],
            respuesta1: dataUsuarios[i][6],
            pregunta2: dataUsuarios[i][7],
            respuesta2: dataUsuarios[i][8]
             
          }
          return resultado;
            
          }
         
        }
 return false
 }

/*
  Valida Email del usuario su existe requiere Email

  retorna True o False
*/
 function validarEmail(email){
  var resultado = Bakendtr.validarEmail(email);  

  return resultado;
 }



   




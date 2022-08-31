/*
insertClaveNueva: Registra la nueva Clave

retorna True o False

Datos requeridos:
    claveNueva:
    pregunta1: 
    respuesta1: 
    pregunta2: 
    respuesta2: 
*/

function insertClaveNueva(datos) {
  let resultado = Bakendtr.insertClaveNueva(datos);
 
 return resultado;
}

/*
validarRespuestas: Valida las respuestas de Olvido de Contraseña

retorna True o False

Datos requeridos:
email:
respuesta1:
respuesta2:
*/
function validarRespuestas(datos){
  let resultado = Bakendtr.validarRespuestas(datos);

  return resultado;
}

/*
insertNewKey: Valida la clave anterior y si la clave anterior no sea igual a la anterior, si es correcta registra la nueva clave

retorna 
True: bolean = registado exitosamente,
falseOldKeySameNewKey: string = La clave anterior es igual a la nueva clave.
falseOldKey: string = La Clave Anterior no es correcta. 


Datos requeridos:
email: string
claveAnterior: string
claveNueva: string
*/

function insertNewKey(datos){
  let resultado = Bakendtr.insertNewKey(datos);

  return resultado
}

/*
insertClaveNueva_OlvidoClave: registra Nueva clave que viene desde Olvido de Clave

retorna True o False

Datos requeridos:
email: string
claveNueva: string
*/

function insertClaveNueva_OlvidoClave(datos){
  let resultado = Bakendtr.insertClaveNueva_OlvidoClave(datos);

  return resultado
}

/*
newUser: Crea nuevo Usuario. 

Datos requeridos: 
  email: string
  nombre: string
  perfil: string

  Repuesta:
  True = Registrado exitosamente
  False = Email ya existe
*/

function newUser(datos) {
  let resultado = Bakendtr.newUser(datos);

  return resultado
}

/*
getAllUsers: Devuelve un Array con todos los Usuarios. 

Respuesta: 
  email: string
  nombre: string
  perfil: string
  usuario_nuevo: boolean 
*/

function getAllUsers() {
  let resultado = Bakendtr.getAllUsers();

  return resultado
}

/*
getEmailUsers: Devuelve un Array con todos los Usuarios. 

Respuesta: 
  email: string
 
*/

function getEmailUsers() {
  let resultado = Bakendtr.getEmailUsers();

  return resultado;
}

/*
resetUser: Reinicia Clave del usuario. 

Requerimiento:
email

Respuesta: 
  true = "reiniciado exitosamente"
  false = "no existe email o error del sistema"
 
*/

function resetUser(email) {
  let resultado = Bakendtr.resetUser(email);

  return resultado;
}

/*
deleteUser: Elimina Usuario 

Requerimiento:
email

Respuesta: 
  true = "Eliminado exitosamente"
  false = "no existe email o error del sistema"
 
*/

function deleteUser(email) {
  let resultado = Bakendtr.deleteUser(email);

  return resultado;
}

/*
 getDataClienteN1Todo: Busca todos los clientes del nivel 1

 respuesta: si es TRUE desvuelve el siguiente array
 condigo,
 nombre,
 pais,
 celular,
 email,
 tj,
 familiar,
 confiable,
 Usuarios

 Si es FALSE retorna vacio.

*/

function getDataClienteN1Todo() {
  let resultado = Bakendtr.getDataClienteN1Todo();

  return resultado;
}

/*
getDataClienteN1 = "Devuelve un array con todos los clientes del usuario"

requerimiento: 
email

respuesta: 
Codigo,
Nombre,
Pais Origen,
Celular,
TJ,
Familiar,
Confiable
*/
function getDataClienteN1(email) {
  let resultado = Bakendtr.getDataClienteN1(email);

  return resultado;
}

/*
 getClientLevel1ByEmail: Busca los clientes del nivel 1 por email

 Requisito:
 email

 Respuesta: si es TRUE desvuelve el siguiente array
 condigo,
 nombre,
 pais,
 celular,
 email,
 tj,
 familiar,
 confiable
 
 Si es FALSE retorna vacio.

*/

function getClientLevel1ByEmail(email) {
  let resultado = Bakendtr.getClientLevel1ByEmail(email);

  return resultado;
}

/*
getAllClientLevel1ByNameAndEmail: Devuelve un array con todos los clientes del Nivel 1

Respuesta:
name,
email
*/
function getAllClientLevel1ByNameAndEmail() {
  let resultado = Bakendtr.getAllClientLevel1ByNameAndEmail();

  return resultado;
}

/*
deleteClientLevel1: Elimina clientes del nivel 1

return: 
true,
false
*/
function deleteClientLevel1(email) {
  let resultado = Bakendtr.deleteClientLevel1(email);

  return resultado;
}

/*
registrarNuevoCliente1: Registra nuevo cliente Nivel 1

Retorna TRUE o FALSE

Requisitos: Un array
datos {
  nombre: string,
  codigoPais: number,
  area: number,
  telefono: string,
  email: string,
  tj: string,
  familiar: string,
  confiable: string,
  
}

*/
function registrarNuevoCliente1(datos){
   let resultado = Bakendtr.registrarNuevoCliente1(datos);

  return resultado;
}


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

function validarLoginIndex(datos){
   let resultado = Bakendtr.validarLoginIndex(datos);

  return resultado;
}

/*
 -BUSCA USUARIO
  -Busca todos los datos de un usuario o varios, filtrando por un dato especifico.
  -Se require la posicion por donde se va a filtrar y el dato que se va a buscar. 
  ejemplo 

  BuscarUsuario(0,"efrainrojas19@gmail.com");

  Requerimiento: un Array 
  posicion: number,
  email: string

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
            respuesta2: 18/08/2019,
            fila: 1
             
          }
*/

function buscarUsuario(datos){
   let resultado = Bakendtr.buscarUsuario(datos);

  return resultado;
}

/**
 * GetPaises: Devuelve un array con todos los paises activos
 * Requisitos: No es necesario pasar pasametros.
 * 
 * Return:
 * True = Retorna un array
 * False = Retorna un NULL o un error de sistema.
 * 
 */

function getPaises(){
   let resultado = Bakendtr.getPaises();

  return resultado;
}





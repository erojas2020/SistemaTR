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
validarClaveAnterior: Valida la clave anterior, si es correcta registra la nueva clave

retorna True o False

Datos requeridos:
email: string
claveAnterior: string
claveNueva: string
*/

function validarClaveAnterior(datos){
  let resultado = Bakendtr.validarClaveAnterior(datos);

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





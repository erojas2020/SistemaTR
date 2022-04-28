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




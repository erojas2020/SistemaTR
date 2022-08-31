/**
 * REQUEST:
 * idPais: number,
 * porcentaje: number,
 * user: string
 * 
 * RETURN 
 * TRUE = Registrado exitoso,
 * 
 * FALSE Devuelve los siguientes array dependiendo el error:
 * error {
   status : false,
    mensaje : "Duplicado"
    } 

    error {
    status : false,
    mensaje : "Usuario incorrecto"
    } 

    error {
    status : false,
    mensaje : "Porcentaje incorrecto"
    } 
  
  error {
    status : false,
    mensaje : "País no existe"
    } 

    error {
    status : false,
    mensaje : "IdPais incorrecto"
    }
 */

function insertTasasGanancias(datos) {
  let resultado = Bakendtr.insertTasasGanancias(datos);
 
 return resultado;
}

/**
 * updateTasasGanancias: Actualiza el porcentaje del pais
 * 
 * REQUEST:
 * idPais: number,
 * porcentaje: number,
 * user: string
 * 
   RETURN 
 * TRUE = Registrado exitoso,
 * 
 * FALSE Devuelve los siguientes array dependiendo el error:
 * error {
   status : false,
    mensaje : "Duplicado"
    } 

    error {
    status : false,
    mensaje : "Usuario incorrecto"
    } 

    error {
    status : false,
    mensaje : "Porcentaje incorrecto"
    } 
  
  error {
    status : false,
    mensaje : "País no existe"
    } 

    error {
    status : false,
    mensaje : "IdPais incorrecto"
    }
 */

function updateTasasGanancias(datos) {
  let resultado = Bakendtr.updateTasasGanancias(datos);
 
 return resultado;
}

/** getTasasGanancias: Devulve un array con todos los datos BD para crear la tabla 
 * RESQUEST: no es necesario 
 * 
 * RETURN
 * ID,
 * PAIS,
 * PORCENTAJE,
 * IDPAIS
*/

function getTasasGanancias() {
  let resultado = Bakendtr.getTasasGanancias();
 
 return resultado;
}

/**
 * deleteTasasGanancias: Elimina registro
 * RESQUEST: 
 * IDPAIS
 * 
 * RETURN
 * TRUE,
 * FALSE
 */
function deleteTasasGanancias(datos) {
  let resultado = Bakendtr.deleteTasasGanancias(datos);
 
 return resultado;
}


/**
 * searchTasasGanancias: Busca los datos por IDPAIS
 REQUEST:
 IDPAIS

 RETURN
 TRUE:
 resultado{
   fila: number,
   idPais: number,
   porcentaje: number,
   status: true
 }
 
FALSE:
resultado{
  status: false,
  mensaje: "idPais incorrecto"
}

 */
function searchTasasGanancias(datos) {
  let resultado = Bakendtr.searchTasasGanancias(datos);
 
 return resultado;
}

/** getPaisesTasasGanancias: Devuelve un array con los paises que hay registrados con porcentajes de ganancia  
 * 
 * REQUEST: No es necesario
 * 
 * RETURN:
 * resultado = [
 * pais: string,
 * idPais: number
 * ]
 *
*/
function getPaisesTasasGanancias() {
  let resultado = Bakendtr.getPaisesTasasGanancias();
 
 return resultado;
}
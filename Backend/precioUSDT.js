/**
 * insertPreciosUSDT: Inserta los precios USDT
 * REQUEST: 
 * idPais: Number,
 * compra: float,
 * venta: float,
 * user: string
 * 
 * RETURN
 * error = {
        status: false,
        mensaje: "duplicado"
        }
    
    error = {
        status: false,
        mensaje: "user incorrecto"
        }
  error = {
        status: false,
        mensaje: "venta incorrecta"
        }

  error = {
        status: false,
        mensaje: "Compra incorrecta"
        }
  
    error = {
        status: false,
        mensaje: "idPais incorrecto"
        }
 */
function insertPreciosUSDT(datos) {
  let resultado = Bakendtr.insertPreciosUSDT(datos);
 
 return resultado;
}

/**searchPrecioUSDT: Busca precios por IDPAIS, funcion para la opcion editar  
 * REQUEST
 * idPais: Number
 * 
 * RETURN
 * data = {
      idPais: Number,
      fecha: Date,
      compra: Float,
      venta: Float,
      fila: Number,
      activo: TRUE or FALSE
    }

*/
function searchPrecioUSDT(idPais) {
  let resultado = Bakendtr.searchPrecioUSDT(idPais);
 
 return resultado;

}

/**updatePrecioUSDT: actualiza los precios USDT
 * REQUEST
 * idPais: Number,
 * compra: Float,
 * venta: Float,
 * user: String
 * 
 * RETURN
 * TRUE OR FALSE
 */
function updatePrecioUSDT(datos) {
  let resultado = Bakendtr.updatePrecioUSDT(datos);
 
 return resultado;

}


/** getPrecioUSDT: Retorna un array con todos los precios 
 * REQUEST: No se requiere
 * 
 * RETURN
 * resultado = [
 * [
 * Pais,
 * fecha,
 * compra,
 * venta
 * ]]
*/

function getPrecioUSDT() {
  let resultado = Bakendtr.getPrecioUSDT();
 
 return resultado;

}
/** deletePrecioUSDT: Elimina precios USDT
 * REQUEST 
 * idPais: Number
 * 
 * RETURN
 * TRUE ORD FALSE
*/
function deletePrecioUSDT(idPais) {
  let resultado = Bakendtr.deletePrecioUSDT(idPais);
 
 return resultado;

}

function borrarTodoPrecioUSDT(user) {
  let resultado = Bakendtr.borrarTodoPrecioUSDT(user);
 
 return resultado;

}




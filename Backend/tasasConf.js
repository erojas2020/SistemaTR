
function getTasas() {
  let resultado = Bakendtr.getTasas();
 
 return resultado;
}

/** procesarTasas: haces las tasas
 * REQUEST:
 * user: email
 * 
 * RETURN
 * TRUE ORD
 * error
 * {
 * status: FALSE,
 * mensaje: string
 * }
 */
function procesarTasas(user) {
  let resultado = Bakendtr.procesarTasas(user);
 
 return resultado;
}

/** updateTasas: actualiza tasa1 y tasa2 
 * REQUEST
 * idTasas = Debe concatenar IdPaisOrigen + IdPaisDestino
 * tasa1 : Float
 * tasa2: float
 * user: string
 * 
 * RETURN
 * true or false
 */
function updateTasas(datos) {
  let resultado = Bakendtr.updateTasas(datos);
 
 return resultado;
}

/** searchTasas: Buscador de tasas:
 * REQUEST
 * idTasas: Number / (Debe concatenar IdPaisOrigen + IdPaisDestino)
 * 
 * RETURN
 * TRUE
 * resultado {
      * status: true,
      * fila: Number,
      * id: Number,
      * tasaBase: Float,
      * tasa1: Float,
      * tasa2: Float
      * monedaOrigen: string,
      * monedaDestino: string
 * }
 * 
 * FALSE
 * error {
    * status: false,
    * mensaje: string
 * }
 */
function searchTasas(idTasas) {
  let resultado = Bakendtr.searchTasas(idTasas);
 
 return resultado;
}

/** getStatusCalculadora Retorna status de la calculadora
 * RETURN
 * TRUE ORD FALSE
 */
function getStatusCalculadora() {
  let resultado = Bakendtr.getStatusCalculadora();
 
 return resultado;
}

/** updateActivarCalculadora: Actualiza el status de la calculadora
 * REQUEST
 * status: boolean
 * 
 * RETURN
 * TRUE OR FALSE
 */
function updateActivarCalculadora(status) {
  let resultado = Bakendtr.updateActivarCalculadora(status);
 
 return resultado;
}



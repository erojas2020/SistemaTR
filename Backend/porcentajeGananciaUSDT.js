/** getPorcentajeGananciaUSDT: devulve el porcentaje de Ganancia en USDT
 * 
 * REQUEST= No se requiere.
 * 
 * RETURN
 * 
 * TRUE  
 * resultado {
 *      status: true,
 *      porcentajeGanancia: Float
 * }
 * 
 * FALSE
 * resultado {
 *      status: false,
 *      porcentajeGanancia: Float,
 *      mensaje: "Error en porcentaje"
 * }
  */
 function getPorcentajeGananciaUSDT() {
    let resultado = Bakendtr.getPorcentajeGananciaUSDT();
   
   return resultado;
}

/** updatePorcentajeGananciaUSDT: Actualiza el porcentaje de ganancia USDT
 * 
 * REQUEST
 * datos{
 * porcentaje: float,
 * user: email
 * }
 * 
 * RETURN 
 * TRUE
 * 
 * FALSE
 * 
 * error{
 *    status: false,
 *    user: "string",
 *    mensaje: "Error en usuario"
 * }
 * 
 *  error{
 *    status: false,
 *    porcentaje: float,
 *    mensaje: "Error en porcentaje"
 * }
  */

 function updatePorcentajeGananciaUSDT(datos) {
   
    let resultado = Bakendtr.updatePorcentajeGananciaUSDT(datos);
   
   return resultado;
  }